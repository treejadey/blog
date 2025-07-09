import type { PageProps } from "fresh";
import { asset, Partial } from "fresh/runtime";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>treuks</title>

        <link rel="stylesheet" href={asset("/reset.css")} />
        <link rel="stylesheet" href={asset("/style.css")} />

        <link rel="icon" type="image/svg+xml" href={asset("/favicon.svg")} />
        <link rel="icon" type="image/png" href={asset("/favicon.png")} />
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
            <div>treuks © 2025</div>
            <div>Site licensed as AGPL 3.0</div>
            <a href="https://github.com/treuks/blog">Source code</a>
          </footer>
        </main>
      </body>
    </html>
  );
}
