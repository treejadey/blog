import type { PageProps } from "fresh";
import { Partial } from "fresh/runtime";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>treejadey</title>

        <link rel="stylesheet" href="/reset.css" />
        <link rel="stylesheet" href="/styles.css" />

        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body>
        <main f-client-nav>
          <header>
            <a href="/">Home</a>
            <a href="/posts">Posts</a>
          </header>

          <Partial name="body">
            <Component />
          </Partial>

          <footer>
            <div>treejadey © 2025</div>
            <div>Site licensed as AGPL 3.0</div>
            <a href="https://github.com/treejadey/blog">Source code</a>
          </footer>
        </main>
      </body>
    </html>
  );
}
