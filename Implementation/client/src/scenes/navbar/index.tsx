import { useState } from "react";
import { Link } from "react-router-dom";
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";

const Navbar = () => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");
  
  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/* LEFT SIDE */}
      <FlexBetween gap="0.75rem">
        <OnlinePredictionIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="18px">
          FINANCE FRIEND
        </Typography>
      </FlexBetween>

      {/* RIGHT SIDE */}
      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: (palette.primary as any)[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            DASHBOARD
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: (palette.primary as any)[100] } }}>
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            PREDICTIONS
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: (palette.primary as any)[100] } }}>
          <Link
            to="/handbook"
            style={{
              color: "inherit",
              textDecoration: "inherit",
            }}
          >
            HANDBOOK
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: (palette.primary as any)[100] } }}>
          <Link
            to="/about"
            style={{
              color: "inherit",
              textDecoration: "inherit",
            }}
          >
            ABOUT
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
