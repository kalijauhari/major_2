import DashboardBox from "@/components/DashboardBox";
import styled from "styled-components";

// StyledDashboardBox component with zoom-in effect on hover
const StyledDashboardBox = styled(DashboardBox)`
  transition: transform 0.3s ease-in-out; // Adding transition for smooth animation
  &:hover {
    transform: scale(1.1); // Scaling up to 110% on hover
  }
`;

const Row3 = () => {
  return (
    <>
      {/* Applying StyledDashboardBox with zoom-in effect */}
      <StyledDashboardBox gridArea="g"></StyledDashboardBox>
      <StyledDashboardBox gridArea="h"></StyledDashboardBox>
      <StyledDashboardBox gridArea="i"></StyledDashboardBox>
      <StyledDashboardBox gridArea="j"></StyledDashboardBox>
    </>  
  );
};

export default Row3;
