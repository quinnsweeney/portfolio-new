import { Link as RouterLink } from "react-router-dom";
import Grid from "@mui/joy/Grid";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { projects } from "../data/projects";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";

function HomePage() {
  return (
    <Grid container spacing={3}>
      {projects.map((project) => (
        <Grid xs={12} sm={6} md={4} key={project.id}>
          <Card
            component={RouterLink}
            to={`/project/${project.id}`}
            variant="outlined"
            sx={{
              textDecoration: "none",
              minHeight: "220px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              "--Card-brand-background":
                "linear-gradient(to top right, #0B3D91, #3E72E5)",
              background: "var(--Card-brand-background)",
              color: "white",
            }}
          >
            <CardContent>
              <Typography
                level="h2"
                fontSize="xl"
                sx={{ mb: 1, color: "white" }}
              >
                {project.title}
              </Typography>
              <Typography textColor="neutral.200">
                {project.shortDescription}
              </Typography>
            </CardContent>
            <Box sx={{ p: 2, display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {project.tags.slice(0, 3).map((tag) => (
                <Chip
                  key={tag}
                  variant="soft"
                  size="sm"
                  sx={{ color: "primary.100", bgcolor: "rgba(0,0,0,0.2)" }}
                >
                  {tag}
                </Chip>
              ))}
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default HomePage;
