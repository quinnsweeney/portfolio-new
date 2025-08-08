import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import Pdf from "../assets/SweeneyQuinnResume.pdf";

function Navbar() {
  return (
    <Box
      component="header"
      sx={{
        p: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid",
        borderColor: "divider",
        background: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(10px)",
        position: "sticky",
        top: 0,
        zIndex: 1100,
      }}
    >
      <Typography level="h4" component="h1">
        <Link component={RouterLink} to="/" overlay underline="none">
          Quinn Sweeney Portfolio
        </Link>
      </Typography>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Link component={RouterLink} to="/" level="title-md">
          Projects
        </Link>
        <Link component={RouterLink} to="/about" level="title-md">
          About
        </Link>
        <Button
          component="a"
          href={Pdf}
          target="_blank"
          rel="noopener noreferrer"
          variant="solid"
          color="primary"
        >
          Resume
        </Button>
      </Box>
    </Box>
  );
}

export default Navbar;
