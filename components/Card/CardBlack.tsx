import { Button } from "../Button";

type CardBlackProps = {
  title: string;
  description: string;
  label: string;
  onClickButton: () => void;
};

function CardBlack({
  title,
  description,
  label,
  onClickButton,
}: CardBlackProps) {
  return (
    <div className="card-black">
      <div className="flex">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <Button label={label} onClickButton={onClickButton} variant="primary" />
    </div>
  );
}

export { CardBlack };
