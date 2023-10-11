import ManEating from "../assets/images/image-man-eating.webp";
import { Box, Grid, Typography } from "@mui/material";

const YourResult = () => {
  return (
    <Grid container paddingTop={12} paddingBottom={12}>
      <Grid item md={6} xs={12}>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={ManEating}
            alt="Man Eating"
            style={{
              width: "100%",
              maxWidth: "75%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Grid>
      <Grid
        item
        md={6}
        xs={12}
        container
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mt={6}
        sx={{
          px: {
            md: 10,
            sm: 4,
            xs: 4,
            xl: 15,
          },
          textAlign: { md: "left", sm: "center", xs: "center" },
        }}
      >
        <Typography variant="h1" gutterBottom>
          What your BMI result means
        </Typography>
        <Typography
          variant="body1"
          mt={2}
          sx={{ textAlign: { md: "left", sm: "center", xs: "center" } }}
        >
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default YourResult;
