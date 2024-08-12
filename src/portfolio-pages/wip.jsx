import React from "react";
import { Box, Typography } from "@mui/material";
import { CIcon } from "@coreui/icons-react";
import * as icon from "@coreui/icons";

const WIP = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ marginBottom: 1, display: "flex", justifyContent: "center" }}>
        <Typography
          variant="h3"
          sx={{ color: "var(--text-color-4)" }}
          gutterBottom
        >
          Work in Progress
        </Typography>
      </Box>

      <Box sx={{ marginBottom: 2, display: "flex", justifyContent: "center" }}>
        <Typography variant="body1">
          This project page is still under construction. Stay tuned for updates!
        </Typography>
      </Box>

      <Box sx={{ marginBottom: 3, display: "flex", justifyContent: "center" }}>
        <CIcon icon={icon["cilTruck"]} size="xl" />
      </Box>
    </Box>
  );
};

export default WIP;
