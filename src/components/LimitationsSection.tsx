import { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import LimitationsCard from "./LimitationsCard";
import Gender from "../assets/images/icon-gender.svg";
import Age from "../assets/images/icon-age.svg";
import Muscle from "../assets/images/icon-muscle.svg";
import Pregnancy from "../assets/images/icon-pregnancy.svg";
import Race from "../assets/images/icon-race.svg";
import { useMediaQuery, useTheme } from "@mui/material/";

const LimitationsSection = () => {
  const [showOffsetGrid, setShowOffsetGrid] = useState(true);

  const theme = useTheme();
  const greaterThanMid = useMediaQuery(theme.breakpoints.up("md"));
  const smallerThanMid = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (greaterThanMid) {
      setShowOffsetGrid(true);
    } else if (smallerThanMid) {
      setShowOffsetGrid(false);
    }
  }, [greaterThanMid, smallerThanMid]);

  return (
    <Grid
      container
      columnSpacing={4}
      rowSpacing={6}
      sx={{ py: 10, px: { md: 10, sm: 10, xs: 10, xl: 15 } }}
    >
      <Grid item sm={12} md={8}>
        <Typography variant="h2" gutterBottom maxWidth="650px">
          Limitations of BMI
        </Typography>
        <Typography variant="body1" maxWidth="650px">
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </Typography>
      </Grid>
      <Grid item sm={12} md={4}>
        <LimitationsCard
          icon={Gender}
          title="Gender"
          description="The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."
        />
      </Grid>
      {showOffsetGrid && <Grid item sm={12} md={4} />}
      <Grid item sm={12} md={4}>
        <LimitationsCard
          icon={Age}
          title="Age"
          description="In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."
        />
      </Grid>
      <Grid item sm={12} md={4}>
        <LimitationsCard
          icon={Muscle}
          title="Muscle"
          description="BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
        />
      </Grid>
      {showOffsetGrid && <Grid item sm={12} md={2} />}
      <Grid item sm={12} md={4}>
        <LimitationsCard
          icon={Pregnancy}
          title="Pregnancy"
          description="Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."
        />
      </Grid>
      <Grid item sm={12} md={4}>
        <LimitationsCard
          icon={Race}
          title="Race"
          description="Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."
        />
      </Grid>
      {showOffsetGrid && <Grid item sm={12} md={4} />}
    </Grid>
  );
};

export default LimitationsSection;
