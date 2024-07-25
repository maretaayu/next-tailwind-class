import { ReactNode } from "react";

type ButtonProps = {
  variant: "primary" | "secondary";
  label: string;
  onClickButton: () => void;
  leadingIcon?: ReactNode;
};

function Button({
  label,
  onClickButton,
  leadingIcon,
  variant = "primary",
}: ButtonProps) {
  return (
    <button onClick={onClickButton} className={`button button-${variant} `}>
      {leadingIcon && leadingIcon}
      {label}
    </button>
  );
}

export { Button };
