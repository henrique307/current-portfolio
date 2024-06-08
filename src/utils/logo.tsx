import { IconInterface } from "./icons/icons";

export function Logo(props: IconInterface) {
  const redTone = "text-accent";
  return (
    <span className={`select-none font-serif text-base-content italic ${props.className}`}>
      <span className={redTone}>H</span>enri<span className={redTone}>D</span>ev
    </span>
  );
}
