import { Grid, Typography } from "@mui/material";
import BMICalculator from "./BMICalculator";

const CalculatorSection = () => {
  return (
    <Grid
      container
      sx={{
        height: { md: "100vh" },

        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: { xs: "100%", md: "75%" }, // Adjusts the width on smaller screens
          height: "100%",
          zIndex: -1,
          background: "linear-gradient(45deg, #E7F6FE 30%, #E7F6FE 90%)",
          borderBottomRightRadius: { xs: "0px", md: "50px" }, // Adjusts the border radius on smaller screens
        },
      }}
    >
      <Grid
        item
        md={6}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          p: {
            md: 10,
            sm: 4,
            xs: 4,
            xl: 15,
          },
          textAlign: {
            md: "left",
            sm: "center",
          },
        }}
      >
        <Typography variant="h1" gutterBottom>
          Body Mass Index calcultor
        </Typography>
        <Typography variant="body1">
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. Whilte BMI is not the sole
          determinant of a healthy weight, it offers a valuable starting point
          to evaluate your overall health and well-being
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        display="flex"
        alignItems="center"
        justifyContent="center"
        // paddingRight={10}
        sx={{
          paddingRight: {
            md: 10,
          },
        }}
      >
        <BMICalculator />
      </Grid>
    </Grid>
  );
};

export default CalculatorSection;
