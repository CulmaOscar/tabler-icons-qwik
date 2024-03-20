import { component$ } from "@builder.io/qwik";

interface Props {
  color?: string;
  size?: string | number;
}
export const BoneIcon = component$<Props>(
  ({ size = "44", color = "#2c3e50" }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-bone"
        width={size || "44"}
        height={size || "44"}
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke={color || "#2c3e50"}
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M15 3a3 3 0 0 1 3 3a3 3 0 1 1 -2.12 5.122l-4.758 4.758a3 3 0 1 1 -5.117 2.297l0 -.177l-.176 0a3 3 0 1 1 2.298 -5.115l4.758 -4.758a3 3 0 0 1 2.12 -5.122z" />
      </svg>
    );
  }
);
