import { FC } from "react";
import { Card, CardGroup, TitleH2 } from "../../components";
import { DATA } from "../../constants/data";

const {
  about: { desc, strengths },
} = DATA;

export const AboutPage: FC = () => {
  return (
    <div data-testid="AboutPage" className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <TitleH2>About Me</TitleH2>
        <p>{desc}</p>
      </div>
      <div className="flex flex-col gap-6">
        <TitleH2>What I am doing</TitleH2>
        <CardGroup>
          {Object.keys(strengths).map((label) => {
            const strength = strengths[label as keyof typeof strengths];
            const title = (
              <p>
                <span className="font-semibold">{`${label}`}</span>-{" "}
                {strength.desc}
              </p>
            );
            const { Icon } = strength;
            return (
              <Card
                key={label}
                title={title}
                Icon={<Icon size={26}></Icon>}
              ></Card>
            );
          })}
        </CardGroup>
      </div>
    </div>
  );
};
