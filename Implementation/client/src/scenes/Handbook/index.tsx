import { Typography, useTheme } from "@mui/material";

const HandbookContent = () => {
  const theme = useTheme();

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    textAlign: "center",
  };

  const gifContainerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "1rem",
    width: "100%",
  };

  const gifContentStyle: React.CSSProperties = {
    maxWidth: "45%",
    height: "45%",
    margin: "1rem",
  };

  const contentStyle: React.CSSProperties = {
    maxWidth: "45%",
    textAlign: "left",
    margin:"1rem",
  };

  return (
    <div style={containerStyle}>
      <Typography variant="h1" color={theme.palette.primary.main} gutterBottom>
        Finance Friend Handbook
      </Typography>

      <div style={gifContainerStyle}>
        <img src="https://www.fastcapital360.com/wp-content/uploads/2020/02/graphic_01-2.gif" alt="First Gif" style={gifContentStyle} />
        <div style={contentStyle}>
          <Typography variant="body1" color={theme.palette.grey[500]}>
            The finance tracker application is a comprehensive solution developed to help organisations manage their financial data and key performance indicators (KPIs). The application provides a user-friendly interface for tracking various financial metrics by leveraging a stack of technologies such as TypeScript, Vite, Recharts, Redux Toolkit, and React Router for front-end development and Node.js, Express.js, Mongoose, and regression.js for backend functionality. It includes a variety of visualization features like area charts, line charts, bar charts, pie charts, and scatter plots, as well as data grids for presenting comprehensive information about products and orders. The addition of features such as grid expansion, customer segmentation, buyer behavior research, expense anomaly detection, and report generation increases its value to enterprises.
          </Typography>
        </div>
      </div>

      <div style={{ ...gifContainerStyle, flexDirection: "row-reverse" }}>
        <img src="https://media.licdn.com/dms/image/D4D12AQEMPxc9PgKDoA/article-cover_image-shrink_720_1280/0/1687870267070?e=1712793600&v=beta&t=nFJkb9cOEwwkICHyJgNdbBaS22w9uRHF4vi2f0I1A6k" alt="Second Gif" style={gifContentStyle} />
        <div style={contentStyle}>
          <Typography variant="body1" color={theme.palette.grey[500]}>
            The application also has a prediction graph feature that uses genuine machine learning techniques, specifically regression.js, to provide predicted insights based on historical data, allowing businesses to make more informed revenue forecasting decisions. The prediction graph feature in the financial tracker application uses advanced machine learning algorithms to provide organizations with important insights into future revenue trends. Using regression.js, the application creates prediction models based on historical financial data, allowing businesses to project income with precision and confidence. By analyzing historical performance and detecting underlying patterns, the prediction graph enables firms to make educated decisions, optimize resource allocation, and effectively strategize for future growth and sustainability.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default HandbookContent;
