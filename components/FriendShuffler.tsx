import type { ComponentChildren } from "preact";

export interface ShufflerProps {
  children: Array<ComponentChildren>;
}

// Taken from https://stackoverflow.com/a/12646864
function shuffleArray<T>(array: Array<T>) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export function FriendShuffler(props: ShufflerProps) {
  const children = [...props.children];
  shuffleArray<ComponentChildren>(children);

  return (
    <>
      {children.map(
        // deno-lint-ignore jsx-key
        (child) => <li>{child}</li>,
      )}
    </>
  );
}
