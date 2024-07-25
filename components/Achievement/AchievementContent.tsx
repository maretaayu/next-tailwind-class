type AchievementContentProps = {
  title: string;
  body: string;
};

function AchievementContent({ title, body }: AchievementContentProps) {
  return (
    <div className="achievement-content">
      <h2 className="font-bold text-xl">{title}</h2>
      <p>{body}</p>
    </div>
  );
}

export { AchievementContent };
export type { AchievementContentProps };
