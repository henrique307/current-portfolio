import { IconInterface } from "./icons/icons";

export function Logo(props: IconInterface) {
  const redTone = "text-red-500";
  return (
    <span className={`select-none font-serif text-base-content italic ${props.className}`}>
      <span className={redTone}>H</span>ennri<span className={redTone}>D</span>ev
    </span>
  );
}
