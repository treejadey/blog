import { asset } from "fresh/runtime";

export interface FriendProps {
  href: string;
  name: string;
  alt?: string;
}

export function StaticFriend(props: FriendProps) {
  return (
    <>
      <a class="friend" href={props.href}>
        <img
          src={asset(`buttons/static/${props.name}.png`)}
          alt={props.alt ? props.alt : props.name}
          width="88"
          height="31"
          loading="lazy"
        />
      </a>
    </>
  );
}
