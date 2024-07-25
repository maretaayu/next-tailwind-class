import {
  Button,
  HeroHome,
  AchievementContentListContainer,
  CardBlack,
  CardPackage,
} from "../components";

const handleClickButton = () => {
  alert("Button clicked!");
};

export default function Page() {
  return (
    <>
      <HeroHome />;
      <AchievementContentListContainer />;
    </>
  );
}
