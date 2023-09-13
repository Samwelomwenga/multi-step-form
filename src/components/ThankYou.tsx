import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  useTheme,
} from "@mui/material";
import iconThankYou from "../assets/images/icon-thank-you.svg";
const ThankYou: React.FC = () => {
  const theme = useTheme();
  const primary = theme.palette.Primary;
  const neutral = theme.palette.neutral;
  return (
    <Card
      sx={{
        placeItems: "center",
        textAlign: "center",
        mx: "1rem",
        py: "2rem",
        px: "1rem",
        mt: { xs: "-3rem", md: "0", backgroundColor: neutral.white.main },
      }}
    >
      <Stack sx={{ mt: "2rem" }}>
        <CardMedia
          component="img"
          sx={{ maxWidth: "4rem", mx: "auto" }}
          image={iconThankYou}
          alt="Thank You Icon"
        />
        <CardContent>
          <Typography
            component="h3"
            variant="h5"
            sx={{
              my: "1rem",
              color: primary.marineBlue.main,
              fontWeight: "700",
            }}
          >
            {" "}
            Thank you!{" "}
          </Typography>
          <Typography paragraph sx={{ color: neutral.coolGray.main }}>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </Typography>
        </CardContent>
      </Stack>
    </Card>
  );
};

export default ThankYou;
