import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import LimitationsCard from "./LimitationsCard";
import Gender from "../assets/images/icon-gender.svg";

// if anything breaks in the future its because you are using grid2
// dont think mui have officially released yet

const LimitationsSection = () => {
  return (
    <Grid
      container
      py={5}
      sx={{
        px: {
          md: 10,
          sm: 15,
          xs: 5,
          xl: 15,
        },
        // mx: "auto",
      }}
      spacing={5}
    >
      <Grid sm={12} md={8}>
        <Typography variant="h2" gutterBottom maxWidth={"750px"}>
          Limitations of BMI
        </Typography>
        <Typography variant="body1" maxWidth={"750px"}>
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </Typography>
      </Grid>
      <Grid sm={12} md={4}>
        <LimitationsCard
          icon={Gender}
          title="Gender"
          description="The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."
        />
      </Grid>
      <Grid md={4} mdOffset={4}>
        <LimitationsCard
          icon={Gender}
          title="Gender"
          description="The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."
        />
      </Grid>
      <Grid md={4}>
        <LimitationsCard
          icon={Gender}
          title="Gender"
          description="The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."
        />
      </Grid>
    </Grid>
  );
};

export default LimitationsSection;
