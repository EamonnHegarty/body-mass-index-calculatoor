import { Box, Card, CardContent, Typography } from "@mui/material";

const LimitationsCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <Card>
      <CardContent>
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "left",
              justifyContent: "left",
              py: 2,
            }}
          >
            <Box component="img" src={icon} pr={1} />
            <Typography variant="h3" gutterBottom>
              {title}
            </Typography>
          </Box>
          <Typography variant="body1">{description}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default LimitationsCard;
