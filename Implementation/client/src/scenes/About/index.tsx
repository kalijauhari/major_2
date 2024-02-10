import React from "react";
import { Typography, useTheme } from "@mui/material";
import CreatorsImagePath from "@/scenes/About/Creators.gif";

const AboutSection = () => {
  const theme = useTheme();

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    textAlign: "center",
  };

  const headingStyle: React.CSSProperties = {
    marginBottom: "1rem",
    alignSelf: "flex-start",
  };

  const sectionStyle: React.CSSProperties = {
    marginTop: "2rem",
  };

  const gifContainerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "1rem",
    width: "100%",
  };

  const gifContentStyle: React.CSSProperties = {
    maxWidth: "38%",
    height: "auto",
  };

  const contentStyle: React.CSSProperties = {
    maxWidth: "45%",
    textAlign: "left",
    marginLeft: "1rem",
  };

  return (
    <div style={containerStyle}>
      <Typography variant="h1" color={theme.palette.primary.main} gutterBottom>
        About Us
      </Typography>

      <div style={{ ...sectionStyle, marginBottom: "2rem" }}>
        <Typography variant="h2" color={theme.palette.secondary.main} style={{ ...headingStyle, textAlign: "left" }}>
           Project Creators
        </Typography>

        <div style={gifContainerStyle}>
          <div style={contentStyle}>
            <Typography variant="body1" color={theme.palette.grey[500]}>
            We are a vibrant five-member team from Kalinga Institute of Industrial Technology in our last year. Meet Sai Anupama Mulupuri, Debalina Saha, Kali Johari, Meghna, and Swati Das, the creative minds behind the revolutionary finance tracker application shown above. With a similar enthusiasm for technology and finance, we worked together to create a comprehensive solution that enables organisations to successfully manage their financial data. Our diversified experiences and expertise in frontend and backend programming, data visualisation, and machine learning have allowed us to design a user-friendly interface with advanced features. Through dedication and effort, we seek to offer significant solutions that match the changing demands of organisations. Join us on this adventure as we continue to innovate.
            </Typography>
          </div>
          <img src={CreatorsImagePath} alt="Creators Image" style={gifContentStyle} />
        </div>
      </div>

      <div style={{ ...sectionStyle, marginTop: "2rem" }}>
        <Typography variant="h2" color={theme.palette.secondary.main} style={{ ...headingStyle, textAlign: "left" }}>
          Reason for Development of the Project
        </Typography>

        <div style={{ ...gifContainerStyle, flexDirection: "row-reverse" }}>
          <div style={contentStyle}>
            <Typography variant="body1" color={theme.palette.grey[500]}>
            Our project was initiated to fulfill the growing demand for comprehensive financial management solutions in businesses. We aimed to empower organisations to track their financial data and important performance measures more efficiently by prioritising user-friendly interface design and leveraging modern technology. Our technology provides critical insights and enables informed decision-making by combining features like data visualisation, predictive analytics, and anomaly detection. We collaborate and innovate to help businesses optimise their financial processes and achieve long-term success.Our mission is driven by the desire to help our clients achieve long-term success. We are dedicated to providing cutting-edge solutions that help businesses survive in today's competitive environment, fostering innovation and sustainability across industries.
            </Typography>
          </div>
          <img src="https://www.geckoboard.com/blog/content/images/size/w2000/2020/01/gb-launch-blog-white.gif" alt="Second Gif" style={gifContentStyle} />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;


