import { define } from "../utils.ts";
import { StaticFriend } from "../components/StaticFriend.tsx";
import { AnimatedFriend } from "../components/AnimatedFriend.tsx";
import { FriendShuffler } from "../components/FriendShuffler.tsx";
import { asset } from "fresh/runtime";

export default define.page(function Home() {
  return (
    <>
      <img
        class="pfp"
        src={asset("/pfp.png")}
        alt="Roxy Lalonde from Homestuck with an attached cat tail and paw gloves. Drawn by raptley (rest in peace)."
        height="300"
        loading="lazy"
      />

      <h1>Hi! I'm treuks!</h1>
      <p>Welcome to my webbed site!</p>

      <br />

      <h2>About me</h2>

      <p>
        My name is Jade. <b>(she/her)</b> <br />
        I was born in Ukraine, live in Ukraine, stuck in Ukraine. <br />
        I'm 19, I'm a trans girl, I'm a minimalist, somewhat of a programmer,
        somewhat of a designer, etc.
      </p>

      <br />

      <p>
        I have some interests, like videogames, can't really call myself a gamer
        though.
      </p>

      <p>
        I really like the Source engine and Valve games in general (I have
        around 2200 hours in TF2).
      </p>

      <br />

      <h2>Some of my links</h2>

      <ul class="links">
        <li>
          <a href="https://github.com/treuks">My GitHub</a>
        </li>

        <li>
          <a href="https://bsky.app/profile/did:plc:2dscizrfsdsbxkytjsyllhc5">
            My Bluesky
          </a>
        </li>

        <li>
          <a href="https://twitch.tv/treuks">My Twitch</a>
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
          <AnimatedFriend
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
        src={asset("/treuks.png")}
        width="88"
        height="31"
        loading="lazy"
        alt="pink and green button with treuks' persona staring in a corner. there is text on it (treuks)"
      />
    </>
  );
});
