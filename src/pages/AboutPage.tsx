import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Avatar from "@mui/joy/Avatar";

function AboutPage() {
  return (
    <Sheet
      variant="outlined"
      sx={{
        borderRadius: "md",
        p: 4,
        maxWidth: "800px",
        mx: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          textAlign: "center",
        }}
      >
        <Avatar src="headshot.jpeg" sx={{ "--Avatar-size": "150px" }} />
        <Typography level="h1" component="h1">
          About Me
        </Typography>
        <Typography level="body-lg" sx={{ maxWidth: "600px" }}>
          Hi, I'm Quinn! I grew up in Denver, Colorado and am currently an
          undergraduate student at the University of Alabama majoring in MIS
          with a minor in Computer Science. I love to ski, watch sports, and
          read - Brandon Sanderson and Matt Dinniman are my favorites!
        </Typography>
        <Typography level="body-lg" sx={{ maxWidth: "600px" }}>
          I've been fascinated with computers for my entire life, and it lead me
          to teach myself how to code at a relatively young age. From there I
          got an apprenticeship doing web development at Pinnacol Assurance -
          the largest workers compensation insurance company in Colorado. I'm
          currently working on a full-stack web app to assist in ski resort
          navigation. I love building things that are useful and fun, and I hope
          to make a positive impact on the world through technology.
        </Typography>
      </Box>
    </Sheet>
  );
}

export default AboutPage;
