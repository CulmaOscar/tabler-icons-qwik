interface Props {
  color?: string;
  size?: string | number;
}
export const UserCircleIcon = ({ size = "44", color = "#2c3e50" }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-user-circle"
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
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
    </svg>
  );
};
