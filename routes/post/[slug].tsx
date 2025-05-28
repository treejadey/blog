import { define } from "../../utils.ts";
import { HttpError, page } from "fresh";
import { getPost } from "../posts.tsx";

import MarkdownItAsync from "markdown-it-async";

export const handler = define.handlers({
  async GET(ctx) {
    const slug = ctx.params.slug;
    const post = await getPost(slug);

    if (post === null) {
      throw new HttpError(404);
    }

    return page({ post });
  },
});

const markdownRenderer = () => {
  const md = MarkdownItAsync({
    async highlight(code, lang) {
      const { codeToHtml } = await import("shiki");
      return await codeToHtml(code, {
        lang,
        themes: { light: "vitesse-light", dark: "poimandres" },
      });
    },
  });

  return async (document: string) => {
    return await md.renderAsync(document);
  };
};

const render = markdownRenderer();

export default define.page<typeof handler>(async function Post({ data }) {
  const renderedMd = await render(data.post.content);

  return (
    <>
      <div class="article-header">
        <h1>{data.post.title}</h1>
        <time>
          {data.post.published_at.toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </div>
      <div
        class="article-content"
        // deno-lint-ignore react-no-danger
        dangerouslySetInnerHTML={{ __html: renderedMd }}
      />
    </>
  );
});
