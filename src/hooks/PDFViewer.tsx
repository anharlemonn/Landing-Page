import React from "react";
import { Viewer, Worker, ThemeContext as PDFThemeContext } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin, ToolbarProps, ToolbarSlot } from "@react-pdf-viewer/default-layout";
import { themePlugin } from "@react-pdf-viewer/theme";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { useTheme } from './ThemeContext';

interface PDFViewerProps {
  fileUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ fileUrl }) => {
  const themePluginInstance = themePlugin();
  const { theme } = useTheme();

  const renderToolbar = (Toolbar: (props: ToolbarProps) => React.ReactElement) => (
    <Toolbar>
      {(slots: ToolbarSlot) => {
        const { Download, EnterFullScreen, Print, ZoomIn, ZoomOut } = slots;
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: "8px",
            }}
          >
            <ZoomOut />
            <ZoomIn />
            <Print />
            <Download />
            <EnterFullScreen />
          </div>
        );
      }}
    </Toolbar>
  );

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: (defaultTabs) => [],
    renderToolbar,
  });

  return (
    <PDFThemeContext.Provider value={theme}>
      <div
                className={`rpv-core__viewer rpv-core__viewer--${theme}`}
                style={{
                    border: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                }}
            >
       <div style={{ flexGrow: 1, overflow: "auto" }}>
       <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
          <Viewer
            fileUrl={fileUrl}
            plugins={[defaultLayoutPluginInstance, themePluginInstance]}
            theme={theme}
          />
          </Worker>
        </div>
      </div>
    </PDFThemeContext.Provider>
  );
};

export default PDFViewer;
