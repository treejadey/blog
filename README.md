
This is a fairly primitive blog made using Deno Fresh 2. 


* The website intentionally, and mostly, **abstains from custom colors**, which makes it mostly rely on your browser to color it. The biggest exception to the "rule" are the syntax highlighting blocks, **for which I prioritise readability over the "style".**
  
* It stores markdown articles within `posts/`.

* It uses [`Shiki` for syntax highlighting](https://shiki.style/) in markdown blocks. 

**Syntax color schemes:**

| 🌛 Dark     | 🌞 Light  |
| ----------- | --------- |
| Tokyo Night | One Light |

I picked these 2 themes out of all of the other supported themes because they are readable and have similar colors.

One Dark Pro looks out of place with the default colors picked by the browsers I tested with.


## Building

To run in dev mode:
```sh
$ deno task dev
```

To build for production:
```sh
$ deno task build
$ deno task start
```
