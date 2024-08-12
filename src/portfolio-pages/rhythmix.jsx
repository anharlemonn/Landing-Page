import React from "react";
import { Box, Link, Typography, Paper } from "@mui/material";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import videoSrc from "../assets/portfolio-assets/rhythmix.mov";

const Rhythmix = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Paper elevation={3} sx={{ padding: 2, marginBottom: 3 }}>
        <Typography variant="h4" gutterBottom>
          See It in Action
        </Typography>
        <video width="100%" controls>
          <source src={videoSrc} type="video/mp4" />
          <source src={videoSrc} type="video/quicktime" />
          Your browser does not support the video tag.
        </video>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="body1" paragraph>
            <strong>Note:</strong> This is (buggy) alpha play-testing footage.
            The app is in development.
          </Typography>
        </Box>
      </Paper>
      <Paper elevation={3} sx={{ padding: 2, marginBottom: 3 }}>
        <Typography variant="h4" gutterBottom>
          What is it?
        </Typography>
        <Typography variant="body1" paragraph>
          Rhythmix 2.0 is the web-app rhythm game I always dreamed of, so I
          built it. Note that the game is intentionally difficult. The app
          allows you to play a Guitar-Hero-like game on any of your favorite
          songs available on Spotify. Features include:
          <ol>
            <li>Auto-generated playable games for any song</li>
            <li>Scoring system and feedback</li>
            <li>
              Typical Spotify UI features, such as play/pause and creating
              playlists
            </li>
            <li>Changing audio output device</li>
          </ol>
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ padding: 2, marginBottom: 3 }}>
        <Typography variant="h4" gutterBottom>
          How is it built?
        </Typography>
        <Typography variant="body1" paragraph>
          The app is built using React, the Spotify API, and the Spotify
          Playback SDK. The auto-generated notes therefore use the song's audio
          features and note "segments", with an internal algorithm to
          pseudo-randomly place the notes into each lane. More implemntation
          details can be found on the Github repo{" "}
          <Link
            href="https://github.com/anlon-zhu/rhythmix-spotify"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              marginLeft: 1,
            }}
          >
            <CIcon icon={icon.cilExternalLink} size="lg" />
          </Link>
        </Typography>

        <Typography variant="h6" paragraph>
          Fun Fact
        </Typography>
        <Typography variant="body1" paragraph>
          Rhythmix 1.0 was a project for my first CS class at Princeton. This
          game was run locally using Java standard libraries and could only play
          the hard-coded songs "Twinkle Twinkle Little Star", "Waiting for Love
          (Avicii)", and "Blue Da Ba Dee (Eiffel 65)". Here's a fun snippet of
          what one of my first coding projects looked like:
        </Typography>
        <pre>
          <code>
            {`
                public class Rhythmix {

                    private ST<String, Double> notes;
                    private Stopwatch watch;
                    private int score;
                
                    public static void keyPressed() {
                        while (StdDraw.hasNextKeyTyped()) {
                            // hitTime = current time from stopwatch + how long it takes to fall
                            char typedKey = StdDraw.nextKeyTyped();
                            String key = Character.toString(typedKey);
                
                            double threshold = 8;
                            double yCoordLine = 25;
                
                            for (Note note : curentNotes) {
                                if (note.getKey == typedKey) {
                                    if (Math.abs(note.getY() - yCoordLine) < threshold) {
                                        score += Math.log(difference) * 100;
                                    }
                                    else {
                                        score += 0;
                                        // show Miss! on screen
                                    }
                                }
                            }
                        }
                    }
                    ...
                }
            `}
          </code>
        </pre>
      </Paper>
    </Box>
  );
};

export default Rhythmix;
