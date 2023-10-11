import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  InputAdornment,
  TextField,
  Grid,
} from "@mui/material";

const BMICalculator = () => {
  const [unit, setUnit] = useState("metric");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [idealWeights, setIdealWeights] = useState("");
  const [healthStatus, setHealthStatus] = useState("");

  const handleOnUnitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUnit(event.target.value);
  };

  const handleOnHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseFloat(event.target.value);
    setHeight(isNaN(inputValue) ? 0 : inputValue);
  };

  const handleOnWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseFloat(event.target.value);
    setWeight(isNaN(inputValue) ? 0 : inputValue);
  };

  const calculateBMI = (height: number, weight: number) => {
    const heightInMeters = height / 100;
    const bmi = weight / heightInMeters ** 2;

    setBmi(bmi);
  };

  const calculateIdealWeight = (height: number) => {
    const heightInMeters = height / 100;

    const minIdealWeight = 18.5 * heightInMeters ** 2;
    const maxIdealWeight = 24.9 * heightInMeters ** 2;

    return `${minIdealWeight.toFixed(1)}kgs - ${maxIdealWeight.toFixed(1)}kgs`;
  };

  const determineHealthStatus = (bmi: number) => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "Healthy";
    } else if (bmi > 24.9 && bmi <= 29.9) {
      return "Overweight";
    } else {
      return "Obese";
    }
  };

  useEffect(() => {
    setIdealWeights(calculateIdealWeight(height));
    setHealthStatus(determineHealthStatus(bmi));
  }, [height, bmi]);

  useEffect(() => {
    calculateBMI(height, weight);
  }, [height, weight]);

  return (
    <Card
      sx={{
        maxWidth: "35rem",
        m: 2,
        p: 1,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
      }}
    >
      <CardContent>
        <Grid container spacing={3} padding={1}>
          <Grid item xs={12}>
            <Typography variant="h3">Enter your details below</Typography>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <RadioGroup
                sx={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
                value={unit}
                onChange={handleOnUnitChange}
              >
                <FormControlLabel
                  value="metric"
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: "primary.light",
                        },
                      }}
                    />
                  }
                  label={
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      Metric
                    </Typography>
                  }
                />
                <FormControlLabel
                  value="imperial"
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: "primary.light",
                        },
                      }}
                    />
                  }
                  label={
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      Imperial
                    </Typography>
                  }
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label={<Typography variant="body1">Height</Typography>}
              id="height-label"
              type="number"
              value={height}
              onChange={handleOnHeightChange}
              sx={{
                "& input::-webkit-inner-spin-button, & input::-webkit-outer-spin-button":
                  {
                    WebkitAppearance: "none",
                    margin: 0,
                  },
                '& input[type="number"]': {
                  MozAppearance: "textfield",
                },

                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "primary.light",
                  },
                "& .MuiInputLabel-outlined.Mui-focused": {
                  color: "primary.light",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <Typography variant="h3" sx={{ color: "primary.light" }}>
                      cm
                    </Typography>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              value={weight}
              onChange={handleOnWeightChange}
              label={<Typography variant="body1">Weight</Typography>}
              id="weight-label"
              type="number"
              sx={{
                "& input::-webkit-inner-spin-button, & input::-webkit-outer-spin-button":
                  {
                    WebkitAppearance: "none",
                    margin: 0,
                  },
                '& input[type="number"]': {
                  MozAppearance: "textfield",
                },

                "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "primary.light",
                  },
                "& .MuiInputLabel-outlined.Mui-focused": {
                  color: "primary.light",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <Typography variant="h3" sx={{ color: "primary.light" }}>
                      kg
                    </Typography>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid
            container
            item
            xs={12}
            sx={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              display="flex"
              flexDirection="column"
              alignItems="start"
              justifyContent="center"
              sx={{
                backgroundColor: "primary.light",
                color: "secondary.light",
                padding: 3,
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Your BMI is...
              </Typography>
              <Typography variant="h1">
                {isNaN(bmi) ? 0 : bmi.toFixed(1)}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                backgroundColor: "primary.light",
                color: "secondary.light",
                paddingX: 3,
                paddingY: { sm: 3 },
                paddingBottom: { xs: 3 },
                borderTopRightRadius: {
                  xs: "0%",
                  sm: "50%",
                },
                borderBottomRightRadius: {
                  xs: "0%",
                  sm: "50%",
                },
              }}
            >
              <Typography variant="body2">
                Your BMI suggests you're <b>{healthStatus}</b>. Your ideal
                weight is between <b>{idealWeights}</b>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default BMICalculator;
