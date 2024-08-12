import React from "react";
import { Box, Link, Typography, Paper } from "@mui/material";

const WaveClock = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Paper elevation={3} sx={{ padding: 2, marginBottom: 3 }}>
        <Typography variant="h4" gutterBottom>
          See It in Action
        </Typography>
        <iframe
          src="https://wave-clock.vercel.app"
          title="Wave Clock"
          style={{ width: "100%", height: "600px", border: "none" }}
        />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="body1" paragraph>
            <strong>Note:</strong> Requires WebGL and hardware acceleration
            enabled in your browser.
            <Link
              href="https://wave-clock.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                marginLeft: 1,
              }}
            >
              wave-clock.vercel.app
            </Link>
          </Typography>
        </Box>
      </Paper>
      <Paper elevation={3} sx={{ padding: 2, marginBottom: 3 }}>
        <Typography variant="h4" gutterBottom>
          What is it?
        </Typography>
        <Typography variant="body1" paragraph>
          Wave Clock is a Software-as-Art project, designed to create an
          intuitive representation of time as a wave generated from noise
          particles. The clock visualizes time with:
          <ol>
            <li>Speed representing Hours</li>
            <li>Frequency representing Minutes</li>
            <li>Amplitude representing Seconds</li>
          </ol>
          The wave’s behavior provides a dynamic representation of time,
          capturing the urgency approaching midnight/noon, turbulence towards
          the end of the hour, and the pulse of each minute.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ padding: 2, marginBottom: 3 }}>
        <Typography variant="h4" gutterBottom>
          How is it built?
        </Typography>
        <Typography variant="body1" paragraph>
          Rendered on a web application using ThreeJS and WebGL, 'Wave Clock'
          empowers 3D renderings and global accessibility as a product. WebGL is
          used for writing shaders, allowing for intricate wave effects and
          real-time updates. The clock utilizes a 3D wave representation of
          oscillations in both x and y dimensions.
          <ul>
            <li>
              ThreeJS: Powers 3D renderings on JavaScript-powered front-ends.
            </li>
            <li>
              WebGL: Language for writing shaders on 3D objects, such as
              ray-tracing based on the position of points.
            </li>
          </ul>
        </Typography>
        <Typography variant="body1" paragraph>
          Here's a code snippet for the shaders used in the Wave Clock:
        </Typography>
        <pre>
          <code>
            {`void main() {
                gl_PointSize = u_pointsize;
                vec3 pos = position;
                pos.z += noise(pos.xy * u_noise_freq_1 + u_time * u_spd_modifier_1) * u_noise_amp_1;
                pos.z += noise(rotate2d(PI / 4.) * pos.yx * u_noise_freq_2 - u_time * u_spd_modifier_2 * 0.6) * u_noise_amp_2;
                vec4 mvm = modelViewMatrix * vec4(pos, 1.0);
                gl_Position = projectionMatrix * mvm;
            }`}
          </code>
        </pre>
        <Typography variant="body1" paragraph>
          For the wave periodicity, the amplitude, frequency, and speed are
          modified based on time:
        </Typography>
        <pre>
          <code>
            {`// Modify the amplitude, frequency, and speed based on time
              uniforms.u_noise_amp_1.value = 0.1 + Math.abs(Math.sin(secondRotation)) * 0.4; // Amplitude based on seconds
              uniforms.u_noise_amp_2.value = 0.1 + Math.abs(Math.sin(secondRotation)) * 0.4; // Amplitude based on seconds
              uniforms.u_noise_freq_1.value = 0.1 + Math.abs(Math.sin(minuteRotation)) * 2.5; // Frequency based on minutes
              uniforms.u_noise_freq_2.value = 0.1 + Math.abs(Math.sin(minuteRotation)) * 2.5; // Frequency based on minutes
              uniforms.u_spd_modifier_1.value = 0.3 + Math.abs(Math.sin(hourRotation)) * 1.5; // Speed based on hours
              uniforms.u_spd_modifier_2.value = 0.3 + Math.abs(Math.sin(hourRotation)) * 1.5; // Speed based on hours`}
          </code>
        </pre>
      </Paper>
    </Box>
  );
};

export default WaveClock;
