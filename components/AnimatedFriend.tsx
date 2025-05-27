export interface FriendProps {
  href: string;
  name: string;
  alt?: string;
}

export function AnimatedFriend(props: FriendProps) {
  return (
    <>
      <a class="friend" href={props.href}>
        <img
          src={`buttons/animated/${props.name}.gif`}
          class="animated"
          alt={props.alt ? props.alt : props.name}
          width="88"
          height="31"
          loading="lazy"
        />
        <img
          src={`buttons/static/${props.name}.png`}
          class="static"
          alt={props.alt ? props.alt : props.name}
          width="88"
          height="31"
          loading="lazy"
        />
      </a>
    </>
  );
}
