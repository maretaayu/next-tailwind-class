import { AchievementContent } from "./AchievementContent";
import type { AchievementContentProps } from "./AchievementContent";

type AchievementContentListProps = {
  achievements: AchievementContentProps[];
};

function AchievementContentList({ achievements }: AchievementContentListProps) {
  return (
    <div className="flex gap-8 px-16 py-8 bg-invert rounded-2xl -mt-20 md:w-8/12 mx-auto justify-center">
      {achievements.map((achievement, index) => (
        <AchievementContent key={index} {...achievement} />
      ))}
    </div>
  );
}

export { AchievementContentList };
