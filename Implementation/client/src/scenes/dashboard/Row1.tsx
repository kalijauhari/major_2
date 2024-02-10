import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";
import styled from "styled-components";

// StyledDashboardBox component with zoom-in effect on hover
const StyledDashboardBox = styled(DashboardBox)`
  transition: transform 0.3s ease-in-out; // Adding transition for smooth animation
  &:hover {
    transform: scale(1.1); // Scaling up to 110% on hover
  }
`;

const Row1 = () => {
  const { data } = useGetKpisQuery();

  return (
    <>
      {/* Applying StyledDashboardBox with zoom-in effect */}
      <StyledDashboardBox gridArea="a"></StyledDashboardBox>
      <StyledDashboardBox gridArea="b"></StyledDashboardBox>
      <StyledDashboardBox gridArea="c"></StyledDashboardBox>
    </>  
  );
};

export default Row1;
