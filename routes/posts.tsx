import { define } from "../utils.ts";
import { extract } from "@std/front-matter/yaml";
import { join } from "@std/path";
import { Head } from "fresh/runtime";

type PostFrontmatter = { title: string; published_at: Date; snippet: string };

export type Post = {
  slug: string;
  title: string;
  published_at: Date;
  content: string;
  snippet: string;
};

export async function getPost(slug: string): Promise<Post | null> {
  let text: string;
  try {
    text = await Deno.readTextFile(join("./posts", `${slug}.md`));
  } catch {
    return null;
  }

  const { attrs, body } = extract<PostFrontmatter>(text);
  return { ...attrs, slug, content: body };
}

export async function getPosts(): Promise<Post[]> {
  const files = Deno.readDir("./posts");
  const promises = [];

  for await (const file of files) {
    const slug = file.name.replace(".md", "");
    promises.push(getPost(slug));
  }

  const posts = await Promise.all(promises) as Post[];
  posts.sort((a, b) => b.published_at.getTime() - a.published_at.getTime());

  return posts;
}

function formatPosts(posts: Post[]) {
  const yearMap: Map<number, Post[]> = new Map();

  for (const post of posts) {
    const year = post.published_at.getUTCFullYear();

    const values = yearMap.get(year);

    if (values === undefined) {
      yearMap.set(year, [post]);
    } else {
      yearMap.set(year, [...values, post]);
    }
  }

  return yearMap;
}

export default define.page(async function Posts() {
  const posts = await getPosts();

  const fPosts = formatPosts(posts);

  return (
    <>
      <Head>
        <meta name="theme-color" content="#6cb9b1" />
      </Head>
      <div class="article-list-wrapper">
        {Array.from(fPosts).map(([group, posts]) => (
          <section key={group}>
            <h1>- {group}</h1>
            <ul class="article-list">
              {posts.map((post) => (
                <li key={post.slug}>
                  <article>
                    <a href={`/post/${post.slug}`}>{post.title}</a>
                    <p>{post.snippet}</p>
                    <time dateTime={post.published_at.toISOString()}>
                      {post.published_at.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </article>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
});
