import DashboardBox from "@/components/DashboardBox";
import styled from "styled-components";

// StyledDashboardBox component with zoom-in effect on hover
const StyledDashboardBox = styled(DashboardBox)`
  transition: transform 0.3s ease-in-out; // Adding transition for smooth animation
  &:hover {
    transform: scale(1.1); // Scaling up to 110% on hover
  }
`;

const Row2 = () => {
  return (
    <>
      {/* Applying StyledDashboardBox with zoom-in effect */}
      <StyledDashboardBox gridArea="d"></StyledDashboardBox>
      <StyledDashboardBox gridArea="e"></StyledDashboardBox>
      <StyledDashboardBox gridArea="f"></StyledDashboardBox>
    </>  
  );
};

export default Row2;
