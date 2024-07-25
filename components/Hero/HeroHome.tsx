import { Button } from "../Button";

function HeroHome() {
  return (
    <div className="hero md:py-40 md:px-20 py-20 px-4 ">
      <div className="md:w-7/12">
        <div className="gap-4 flex flex-col">
          <h1 className="text-invert md:text-6xl text-3xl font-bold">
            Weaving Your Dreams into Unforgettable Adventures
          </h1>
          <p className="text-invert text-xl">
            Discover Bali's magic with our custom travel packages. Relax and
            enjoy; we handle the rest.
          </p>
        </div>
        <div className="flex gap-3 mt-8">
          <Button
            label="Get Started"
            onClickButton={() => {}}
            variant="primary"
          />
          <Button
            label="Customize Your Trip"
            onClickButton={() => {}}
            variant="secondary"
          />
        </div>
      </div>
    </div>
  );
}

export { HeroHome };
