import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";

const FateZeroUBW = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Paper elevation={3} sx={{ padding: 2, marginBottom: 3 }}>
        <Typography variant="h4" gutterBottom>
          Project Overview
        </Typography>
        <Typography variant="body1" paragraph>
          FateZero UBW is my generative AI model that aims to improve
          text-to-video-editing (T2Ve) diffusion models. Text to video editing
          uses natural language to edit videos! For example, let's replace the
          white van below with a Lamborghini.
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <img
              src={require("./assets/fatezero/premise.gif")}
              alt="Input Video Example"
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src={require("./assets/fatezero/premise0.gif")}
              alt="Input Video Example"
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>
        <Typography variant="body1" paragraph sx={{ marginTop: 2 }}>
          This project is an extension of the FateZero and Tune-A-Video
          text-to-video models. These papers are considered the state of the art
          in text-to-video-editing research (as of 2024). However, these models
          tend to struggle with more complex inputs and diverse datasets,
          leading to issues like flickering and visual artifacts.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ padding: 2, marginBottom: 3 }}>
        <Typography variant="h4" gutterBottom>
          Key Features
        </Typography>
        <ol>
          <li>
            <Typography variant="body1">
              Continuous blended attention masks with configurable steepness.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              New hyperparameters for fine-tuning mask opacity and word weight.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Improved configurability for handling complex, noisy videos.
            </Typography>
          </li>
        </ol>
      </Paper>

      <Paper elevation={3} sx={{ padding: 2, marginBottom: 3 }}>
        <Typography variant="h4" gutterBottom>
          How exactly do T2Ve models work?
        </Typography>
        <Typography variant="h6">Tune-A-Video</Typography>
        <Typography variant="body1" paragraph>
          Tune-A-Video uses one-shot tuning from existing text-to-image models,
          training with a single text-video pair to learn structural guidance
          via diffusion. This method employs a 3D spatio-temporal attention
          block for temporal consistency, focusing on only two frames at a time
          to reduce computational costs. During inference, it applies DDIM
          inversion to maintain structural consistency and motion.
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <img
              src={require("./assets/fatezero/tuneavideo_train.png")}
              alt="Tune-A-Video Architecture"
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src={require("./assets/fatezero/tuneavideo_test.png")}
              alt="Tune-A-Video Architecture"
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>

        <Typography variant="h6" sx={{ marginTop: 2 }}>
          FateZero
        </Typography>
        <Typography variant="body1" paragraph>
          FateZero builds on Tune-A-Video by introducing zero-shot editing,
          eliminating the need for per-prompt training. Instead of DDIM
          inversion, it captures intermediate attention maps during inversion,
          preserving structural and motion information. These maps are fused
          with cross-attention features, minimizing semantic leakage and
          enhancing consistency. FateZero achieves high temporal consistency
          (96.5% TCS) without the need for additional training, making it a
          robust zero-shot text-based video editing framework.
        </Typography>
        <img
          src={require("./assets/fatezero/fatezero_train.png")}
          alt="FateZero Architecture"
          style={{ width: "100%" }}
        />
      </Paper>

      <Paper elevation={3} sx={{ padding: 2, marginBottom: 3 }}>
        <Typography variant="h4" gutterBottom>
          What did I do?
        </Typography>
        <Typography variant="body1" paragraph>
          FateZero UBW is a case study on using a T2Ve model to replace a white
          van with a Lamborghini in a noisy 8-frame dash-cam video from the
          Driving Event Camera Dataset. The study aims to evaluate how T2Ve
          models perform on practical, noisy datasets, relevant to applications
          like training autonomous vehicles. My three major contributions are
          in:
        </Typography>

        <ol>
          <li>
            <Typography variant="h6">
              Continuous Blending Function: Replacing binary attention masks
              with a continuous function to reduce artifacts.
            </Typography>
            <img
              src={require("./assets/fatezero/ubw_continuous.png")}
              alt="Attention Mask"
              style={{ width: "100%", marginTop: 10 }}
            />
          </li>
          <li>
            <Typography variant="h6">
              Amplified Tensor Weights: Increasing the emphasis on edited words
              to improve the CLIP score.
            </Typography>
            <img
              src={require("./assets/fatezero/ubw_hyperparam1.png")}
              alt="Hyperparameters"
              style={{ width: "100%", marginTop: 10 }}
            />
          </li>
          <li>
            <Typography variant="h6">
              Increased Opacity Control: Fine-tuning the attention mask for
              better control without impacting the entire model.
            </Typography>
            <img
              src={require("./assets/fatezero/ubw_hyperparam2.png")}
              alt="Hyperparameters"
              style={{ width: "100%", marginTop: 10 }}
            />
          </li>
        </ol>

        <Typography variant="body1" paragraph>
          Here's a before and after comparison of the FateZero UBW model on the
          dash-cam video. The difference is somewhat subtle, but notice how much
          smoother the sky is in the final output! The Lamborghini is also more
          clearly defined.
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <img
              src={require("./assets/fatezero/init_res.gif")}
              alt="Initial Output"
              style={{
                width: "60%",
                height: "auto",
                display: "block",
                margin: "0 auto",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src={require("./assets/fatezero/final_res.gif")}
              alt="Final Output"
              style={{
                width: "60%",
                height: "auto",
                display: "block",
                margin: "0 auto",
              }}
            />
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="h4" gutterBottom>
          Ok, but how about on other datasets?
        </Typography>
        <Typography variant="body1" paragraph>
          The goal is to make the FateZero UBW model more configurable for
          specific inputs without compromising performance on general datasets.
          To test this, I ran the model on the benchmark datasets to see how it
          does on general videos. I then assessed the new model using standard
          metrics such as Temporal Consistency Score (TCS) and CLIP Score (CLS),
          alongside an ablation study to measure the impact of each
          modification.
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <img
              src={require("./assets/fatezero/testset0.gif")}
              alt="Test Set 0"
              style={{ width: "100%" }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <img
              src={require("./assets/fatezero/testset2.gif")}
              alt="Test Set 2"
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>
        <Typography variant="body1" paragraph sx={{ marginTop: 2 }}>
          And finally, here's the model improvements (our model is the
          right-most bar):
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img
            src={require("./assets/fatezero/final_res_scores.png")}
            alt="Final Scores"
            style={{ width: "80%" }}
          />
        </Box>
        <Typography variant="body1" paragraph sx={{ marginTop: 2 }}>
          As you can see, we got:
        </Typography>
        <ol>
          <li>
            <Typography variant="body1">
              A
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "1.5em",
                  color: "var(--text-color-3)",
                  marginRight: "8px",
                  marginLeft: "8px",
                }}
              >
                15%
              </span>
              improvement to the CLS (fidelity to the text prompt)
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "1.5em",
                  color: "var(--text-color-3)",
                  marginRight: "8px",
                  marginLeft: "8px",
                }}
              >
                0.06%
              </span>{" "}
              improvement to the TCS (temporal coherence).
            </Typography>
          </li>
        </ol>
        <Typography variant="body1">
          In other words, on both the Lamborghini case study and the benchmark
          datasets, the FateZero UBW model outperforms the existing models by
          better representing the natural language used to make the edits while
          maintaining the generated videos smoothness between frames.
        </Typography>
      </Paper>
    </Box>
  );
};

export default FateZeroUBW;
