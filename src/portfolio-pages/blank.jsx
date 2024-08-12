import React from "react";
import { Link, Box, Typography, IconButton } from "@mui/material";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";

const Blank = (link) => {
  return (
    <Box sx={{ padding: 3 }}>
      <Box
        sx={{
          marginTop: 1,
          marginBottom: 3,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "var(--text-color-4)" }}
          gutterBottom
        >
          This page has been intentionally left blank.
        </Typography>
      </Box>

      <Box
        sx={{
          marginBottom: 3,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6">
          Have access? Check out a demo of the project
        </Typography>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            marginLeft: 1,
          }}
        >
          <CIcon icon={icon.cilExternalLink} size="lg" />
        </Link>
      </Box>
    </Box>
  );
};

export default Blank;
