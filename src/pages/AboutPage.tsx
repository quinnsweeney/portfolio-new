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
        <Avatar
          src="https://media.licdn.com/dms/image/v2/D4D03AQFU_MMxisyXOg/profile-displayphoto-shrink_800_800/B4DZdAreY_GYAc-/0/1749136828673?e=1757548800&v=beta&t=_QYt-tSIC2iGzCvAr0VGyD5AGZsQ6FaeUZm1erRCLBs" // Replace with your photo
          sx={{ "--Avatar-size": "150px" }}
        />
        <Typography level="h1" component="h1">
          About Me
        </Typography>
        <Typography level="body-lg" sx={{ maxWidth: "600px" }}>
          Hi, I'm Quinn! I grew up in Denver, Colorado and am currently an
          undergraduate student at the University of Alabama majoring in MIS
          with a minor in Computer Science. I love to ski, watch sports, and
          read - Brandon Sanderson is my favorite!
        </Typography>
        <Typography level="body-lg" sx={{ maxWidth: "600px" }}>
          I've been fascinated with computers for my entire life, and it lead me
          to teach myself how to code at a relatively young age. From there I
          got an apprenticeship doing web development at Pinnacol Assurance -
          the largest workers compensation insurance company in Colorado. I
          won't bore you with the details, but my passion for coding led me down
          a long path of challenges and success stories to get where I am today.
        </Typography>
        <Typography level="body-lg" sx={{ maxWidth: "600px" }}>
          I'm currently working on some projects to beefen up my portfolio, as
          well as applying to internships for next summer.
        </Typography>
      </Box>
    </Sheet>
  );
}

export default AboutPage;
