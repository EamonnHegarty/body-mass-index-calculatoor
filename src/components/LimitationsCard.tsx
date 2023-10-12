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
              width: "auto",
              height: "auto",
              px: "auto",
              py: 2,
            }}
          >
            <Box component="img" src={icon} />
            <Typography variant="h3">{title}</Typography>
          </Box>
          <Typography variant="body1">{description}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default LimitationsCard;
