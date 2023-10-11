import { Box, Card, CardContent, Typography } from "@mui/material";

const TipsCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <Card
      sx={{
        boxShadow: "none",
        backgroundColor: "transparent",
        border: "none",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              mb: 2,
              width: "60px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              py: 4,
            }}
          >
            <Box component="img" src={icon} />
          </Box>
        </Box>
        <Typography variant="h3" align="center" sx={{ mb: 2, pb: 2 }}>
          {title}
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 2 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export { TipsCard };
