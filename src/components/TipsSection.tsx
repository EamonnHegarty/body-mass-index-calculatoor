import { Grid } from "@mui/material";
import { TipsCard } from "./TipsCard";
import Eating from "../assets/images/icon-eating.svg";
import Exercise from "../assets/images/icon-exercise.svg";
import Sleep from "../assets/images/icon-sleep.svg";

const tipsData = [
  {
    key: 1,
    icon: Eating,
    title: "Healthy Eating",
    description:
      "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.",
  },
  {
    key: 2,
    icon: Exercise,
    title: "Regular exercise",
    description:
      "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.",
  },
  {
    key: 3,
    icon: Sleep,
    title: "Adequate sleep",
    description:
      "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.",
  },
];

const TipsSection = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        maxWidth: { sm: "100%", md: "calc(100% - 5px)" },
        borderRadius: "25px",
        px: {
          md: 10,
          sm: 15,
          xs: 5,
          xl: 15,
        },
        py: 8,
        background:
          "var(--Gradient-1, linear-gradient(290deg, #D6FEF8 0%, rgba(214, 252, 254, 0.00) 33.33%, rgba(214, 252, 254, 0.00) 66.67%, rgba(214, 252, 254, 0.00) 100%))",
      }}
    >
      {tipsData.map((data) => (
        <Grid key={data.key} item sm={12} md={4} lg={4}>
          <TipsCard
            icon={data.icon}
            title={data.title}
            description={data.description}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default TipsSection;
