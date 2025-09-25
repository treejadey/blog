import { define } from "../../utils.ts";
import { HttpError, page } from "fresh";
import { getPost } from "../posts.tsx";
import { Head } from "fresh/runtime";

import MarkdownItAsync from "markdown-it-async";

export const handler = define.handlers({
  async GET(ctx) {
    const slug = ctx.params.slug;
    const post = await getPost(slug);

    if (post === null) {
      throw new HttpError(404);
    }

    const url = ctx.url;

    return page({ post, url });
  },
});

const markdownRenderer = () => {
  const themes = {
    light: "one-light",
    dark: "tokyo-night",
  };

  const md = MarkdownItAsync({
    async highlight(code, lang) {
      const { codeToHtml } = await import("shiki");

      return await codeToHtml(code, {
        lang,
        themes,
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
  const { post } = data;

  const currentUrl = data.url.toString();
  const rootUrl = data.url.origin;

  const pfpLocationUrl = rootUrl + "/megpfp.png";
  return (
    <>
      <Head>
        <title>{post.title} - treejadey</title>
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.snippet} />
        <meta property="og:url" content={currentUrl} />

        <meta property="og:image" content={pfpLocationUrl} />
        <meta property="og:image:height" content="460" />
        <meta property="og:image:width" content="460" />
        <meta
          property="og:image:alt"
          content="Shy pale girl with dragon horns and aquamarine colored hair, left eye visible, right eye covered by hair. Drawn by megrocks https://bsky.app/profile/did:plc:w3sldsifm5pm4sojcqk2u4th"
        />

        <meta name="og:site_name" content="Treejadey's personal website." />
        <meta property="og:type" content="article" />
        <meta name="article:author" content="Jade" />

        <meta
          name="article:published_time"
          content={post.published_at.toISOString()}
        />

        <meta name="description" content={post.snippet} />
        <meta name="theme-color" content="#6cb9b1" />
      </Head>

      <div class="article-header">
        <h1>{post.title}</h1>
        <time datetime={post.published_at.toISOString()}>
          {post.published_at.toLocaleDateString("en-us", {
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
