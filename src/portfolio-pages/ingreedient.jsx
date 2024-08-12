import React from "react";
import { Box, Grid, Link, Typography, Paper } from "@mui/material";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";

const Ingreedient = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Paper elevation={3} sx={{ padding: 2, marginBottom: 3 }}>
        <Typography variant="h4" gutterBottom>
          What is it?
        </Typography>
        <Typography variant="body1" paragraph>
          Ingreedient is a web-app built around a food-knowledge graph that
          allows users to:
        </Typography>
        <ol>
          <li> Retrieve information about ingredients</li>
          <li>Explore graph-based recipes based on ingredients</li>
          <li>Find recipes that match your given ingredients</li>
          <li>
            Filter ingredients by category and search for recipes by ingredients
          </li>
        </ol>
        <Typography variant="body1" paragraph>
          Ingreedient's knowledge graph is built using natural language
          processing techniques for vector similarity searches and NER, used to
          process web-scraped recipes from various APIs.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img
            src={require("../assets/portfolio-assets/ingreedient-premise.png")}
            alt="Ingreedient Premise"
            style={{ width: "70%" }}
          />
        </Box>
      </Paper>

      <Paper elevation={3} sx={{ padding: 2, marginBottom: 3 }}>
        <Typography variant="h4" gutterBottom>
          Why was it built?
        </Typography>
        <Typography variant="body1" paragraph>
          I built ingreedient to explore the potential of knowledge graphs in
          the home-cooking. I am a go-with-the-flow home cook that likes to
          experiment with recipes on the fly instead of assembling grocery lists
          for specific recipes. I wanted to build a tool that could help me
          learn recipes based on what I already have in my pantry. I also
          happened to be interested in natural language processing and
          graph-based databases such as Neo4jat the time, so I combined these
          interests to build Ingreedient.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ padding: 2, marginBottom: 3 }}>
        <Typography variant="h4" gutterBottom>
          Tech Stack & Database Design
        </Typography>
        <Typography variant="body1" paragraph>
          Ingreedient is built using a React-Flask stack with a Neo4j graph
          database. The dynamic data visualization uses D3.js for graph-node
          rendering.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CIcon icon={icon.cibReact} size="xl" className="skill-icon" />
          <CIcon icon={icon.cibFlask} size="xl" className="skill-icon" />
          <CIcon icon={icon.cibNeo4j} size="xl" className="skill-icon" />
          <CIcon icon={icon.cibD3Js} size="xl" className="skill-icon" />
        </Box>
      </Paper>

      <Paper elevation={3} sx={{ padding: 2, marginBottom: 3 }}>
        <Typography variant="h4" gutterBottom>
          Features and Interfaces
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Note:</strong> Live site is down after I stopped hosting the
          DB. You can instead view the repo here
          <Link
            href="https://github.com/anlon-zhu/FoodKG"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              marginLeft: 1,
            }}
          >
            <CIcon icon={icon.cilExternalLink} size="xs" />
          </Link>
        </Typography>
        <ol>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Ingredient-based recipe search</strong> Allows users to
              input ingredients and find recipes that match the ingredients.
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <img
                  src={require("../assets/portfolio-assets/ingreedient-search.png")}
                  alt="Data Entry Interface"
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <img
                  src={require("../assets/portfolio-assets/ingreedient-recipe.png")}
                  alt="Data Viewing Interface"
                  style={{ width: "100%" }}
                />
              </Grid>
            </Grid>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Recipe Exploration:</strong> Allows users to explore new
              recipes with similar ingredients to the ones they have queried by
              generating new recipe nodes.
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src={require("../assets/portfolio-assets/ingreedient-explore.png")}
                alt="Explore Interface"
                style={{ width: "70%" }}
              />
            </Box>
          </li>
        </ol>
      </Paper>
    </Box>
  );
};

export default Ingreedient;
