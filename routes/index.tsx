import { define } from "../utils.ts";
import { StaticFriend } from "../components/StaticFriend.tsx";
import { AnimatedFriend } from "../components/AnimatedFriend.tsx";
import { FriendShuffler } from "../components/FriendShuffler.tsx";
import { Head } from "fresh/runtime";

export default define.page(function Home() {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#6cb9b1" />
      </Head>

      <h1>Hi! I'm treejadey!</h1>
      <p>Welcome to my webbed site!</p>
      <br />

      <figure>
        <picture>
          <source srcset="/meg_cropped_art.avif" type="image/avif" />
          <source srcset="/meg_cropped_art.webp" type="image/webp" />
          <img
            class="pfp"
            src="/meg_cropped_art.png"
            alt="Shy pale girl with dragon horns and aquamarine colored hair, left eye visible, right eye covered by hair."
            height="390"
            loading="lazy"
          />
        </picture>

        <figcaption>
          This is me irl in case you were wondering hehe (real).{" "}
          <a href="https://bsky.app/profile/did:plc:w3sldsifm5pm4sojcqk2u4th/post/3kib7kjultl2x">
            Original art by megrocks
          </a>
        </figcaption>
      </figure>

      <br />

      <h1>About me</h1>

      <p>
        My name is Jade. <b>(she/her)</b> <br />
        I was born in Ukraine, live in Ukraine, stuck in Ukraine. <br />
        I'm 19, I'm trans, I'm a minimalist, somewhat of a programmer, somewhat
        of a designer, etc.
      </p>

      <br />

      <p>
        I like videogames.
      </p>

      <p>
        I really like the Source 1 engine and Valve games in general (I have
        around 2260 hours in TF2).
      </p>
      <p>
        I guess I'm known for liking and identifying fonts.
      </p>

      <br />

      <h2>Some of my links</h2>

      <ul class="links">
        <li>
          <a href="https://github.com/treejadey">My GitHub</a>
        </li>

        <li>
          <a href="https://bsky.app/profile/did:plc:2dscizrfsdsbxkytjsyllhc5">
            My Bluesky
          </a>
        </li>

        <li>
          <a href="https://twitch.tv/treejadey">My Twitch</a>
        </li>
      </ul>

      <br />

      <h2>Friends (in a very important order)</h2>

      <ul class="friend-buttons">
        <FriendShuffler>
          <StaticFriend
            name="522"
            alt="522@5snb.club"
            href="https://www.5snb.club/"
          />
          <StaticFriend
            name="cy"
            href="https://cy-bernet-ix.neocities.org/"
          />
          <AnimatedFriend name="edin" href="https://edintomato.tumblr.com/" />
          <StaticFriend
            name="liffey"
            href="https://the-liffey.neocities.org/"
          />
        </FriendShuffler>
      </ul>
      <br />

      <h3>You can have my button if you want (make sure to link here)</h3>
      <img
        class="friend"
        src="/mybutton.png"
        width="88"
        height="31"
        loading="lazy"
        alt="pink and green button with treejadeys persona staring in a corner. there is text on it (treejadey)"
      />
    </>
  );
});
