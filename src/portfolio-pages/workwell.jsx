import React from "react";
import { Box, Grid, Link, Typography, Paper } from "@mui/material";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";

const WorkWell = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Paper elevation={3} sx={{ padding: 2, marginBottom: 3 }}>
        <Typography variant="h4" gutterBottom>
          What is WorkWell?
        </Typography>
        <Typography variant="body1" paragraph>
          WorkWell is a re-entry program based in the Trenton area that helps
          formerly incarcerated people overcome barriers to employment. We
          worked with Workwell's founder to build an app that would streamline
          their daily operations and improve the security of sensitive
          participant data. Workwell is a full-stack web database tool designed
          to streamline WorkWell's logistical operations, making it easier for
          them to manage data and secure partnerships that better serve
          returning citizens with job opportunities.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img
            src="https://www.workwellpartnership.org/wp-content/uploads/2023/11/workwell-partnership.jpg"
            alt="WorkWell"
            style={{ width: "70%" }}
          />
        </Box>
      </Paper>

      <Paper elevation={3} sx={{ padding: 2, marginBottom: 3 }}>
        <Typography variant="h4" gutterBottom>
          Project Motivation
        </Typography>
        <Typography variant="body1" paragraph>
          WorkWell interviews several dozen returning citizens every month and
          selects about 10 for a work-training cohort. The program lasts 4
          weeks, during which participant attendance is tracked as they receive
          stipends per day attended. The program relies heavily on grants and
          government partnerships, requiring detailed statistics and data to
          demonstrate efficacy.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ padding: 2, marginBottom: 3 }}>
        <Typography variant="h4" gutterBottom>
          Tech Stack & Database Design
        </Typography>
        <Typography variant="body1" paragraph>
          The app's backend is built using the Python Django framework with a
          PostgreSQL database and is deployed on Heroku. The database consists
          of three main tables for interviews, participants, and cohorts,
          supporting features like attendance tracking and statistics
          generation. The frontend is a simple bootstrapped HTML/CSS interface,
          designed for ease of use for non-technical staff.
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <img
              src={require("../assets/portfolio-assets/workwell-db.png")}
              alt="Database Schema"
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src={require("../assets/portfolio-assets/workwell-stack.png")}
              alt="Tech Stack"
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={3} sx={{ padding: 2, marginBottom: 3 }}>
        <Typography variant="h4" gutterBottom>
          Features and Interfaces
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Note:</strong> Images use placeholder data for privacy. If you
          have access, you can view the live app
          <Link
            href="https://workwell.herokuapp.com/workwell/"
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
              <strong>Data Entry and Viewing Interface:</strong> Allows
              WorkWell's management staff to efficiently enter and track
              re-entry participants' information across various fields. This
              interface simplifies the data entry process compared to the
              current Excel-based system.
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <img
                  src={require("../assets/portfolio-assets/workwell-participants.png")}
                  alt="Data Entry Interface"
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <img
                  src={require("../assets/portfolio-assets/workwell-bycohort.png")}
                  alt="Data Viewing Interface"
                  style={{ width: "100%" }}
                />
              </Grid>
            </Grid>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Report Generation Interface:</strong> Builds on the data
              entry interface, allowing staff to filter data and generate
              statistical reports (mean, median, mode, etc.) for presentations
              to funding sources.
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <img
                  src={require("../assets/portfolio-assets/workwell-cohorts.png")}
                  alt="Data Entry Interface"
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <img
                  src={require("../assets/portfolio-assets/workwell-interview.png")}
                  alt="Data Viewing Interface"
                  style={{ width: "100%" }}
                />
              </Grid>
            </Grid>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Admin Interface:</strong> Provides administrators with
              control over data field access, allowing them to limit visibility
              and streamline the data management process.
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <img
                  src={require("../assets/portfolio-assets/workwell-admin.png")}
                  alt="Admin Interface"
                  style={{ width: "100%" }}
                />
              </Grid>
            </Grid>
          </li>
        </ol>
      </Paper>
    </Box>
  );
};

export default WorkWell;
