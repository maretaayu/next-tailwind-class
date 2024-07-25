import Image from "next/image";

type CardPackageProps = {
  title: string;
  image: string;
};

function CardPackage({ title, image }: CardPackageProps) {
  return (
    <div className="card">
      <Image src={image} alt={title} width={362} height={525} />
      <h2>{title}</h2>
    </div>
  );
}

export { CardPackage };
