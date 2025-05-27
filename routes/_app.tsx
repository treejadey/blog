import type { PageProps } from "fresh";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>treuks</title>

        <link rel="stylesheet" href="/reset.css" />
        <link rel="stylesheet" href="/style.css" />

        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body>
        <main>
          <header>
            <a href="/">Home</a>
            <a href="/posts">Posts</a>
            <a href="/notes">Notes</a>
          </header>

          <Component />

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
