import { IconPropsModel } from "../models/icon-props.model";

export const StethoscopeIcon = ({
  size = 44,
  stroke = 1.5,
  color = "#2c3e50",
}: IconPropsModel) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-stethoscope"
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
      <path d="M6 4h-1a2 2 0 0 0 -2 2v3.5h0a5.5 5.5 0 0 0 11 0v-3.5a2 2 0 0 0 -2 -2h-1" />
      <path d="M8 15a6 6 0 1 0 12 0v-3" />
      <path d="M11 3v2" />
      <path d="M6 3v2" />
      <path d="M20 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    </svg>
  );
};
