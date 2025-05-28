import { define } from "../../utils.ts";
import { HttpError, page } from "fresh";
import { getPost } from "../posts.tsx";

import Shiki from "@shikijs/markdown-it";
import MarkdownIt from "markdown-it";

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

const markdownRenderer = async () => {
  const md = MarkdownIt().use(
    await Shiki({ themes: { light: "vitesse-light", dark: "poimandres" } }),
  );

  return (document: string) => {
    return md.render(document);
  };
};

const render = await markdownRenderer();

export default define.page<typeof handler>(function Post({ data }) {
  const renderedMd = render(data.post.content);

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
