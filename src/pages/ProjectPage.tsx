import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Chip from "@mui/joy/Chip";
import Button from "@mui/joy/Button";

function ProjectPage() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <Typography>Project not found!</Typography>;
  }

  return (
    <Sheet
      variant="outlined"
      sx={{
        borderRadius: "md",
        p: { xs: 2, md: 4 },
        maxWidth: "900px",
        mx: "auto",
      }}
    >
      <Box
        sx={{
          mb: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          component="button"
          onClick={() => window.history.back()}
          variant="solid"
        >
          Back
        </Button>
      </Box>
      <Typography level="h1" component="h1" gutterBottom>
        {project.title}
      </Typography>

      <Box sx={{ my: 3 }}>
        <Typography level="h4" component="h2" gutterBottom>
          Technologies Used
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {project.tags.map((tag) => (
            <Chip key={tag} variant="solid" color="primary">
              {tag}
            </Chip>
          ))}
        </Box>
      </Box>

      <Typography level="body-lg" sx={{ my: 3, lineHeight: 1.7 }}>
        {project.longDescription}
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          mt: 3,
          borderTop: "1px solid",
          borderColor: "divider",
          pt: 3,
        }}
      >
        <Button
          component="a"
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="solid"
        >
          View Live Site
        </Button>
        <Button
          component="a"
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="outlined"
        >
          View Source Code
        </Button>
      </Box>
    </Sheet>
  );
}

export default ProjectPage;
