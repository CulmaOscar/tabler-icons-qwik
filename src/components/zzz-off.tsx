import { IconPropsModel } from "../models/icon-props.model";

export const ZzzOffIcon = ({
  size = 44,
  stroke = 1.5,
  color = "#2c3e50",
}: IconPropsModel) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-zzz-off"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      stroke-width={stroke}
      stroke={color}
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 12h6l-6 8h6" />
      <path d="M14 4h6l-5.146 6.862m1.146 1.138h4" />
      <path d="M3 3l18 18" />
    </svg>
  );
};
