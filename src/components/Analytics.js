import React from "react";
import styled from "styled-components";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { BiGroup } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import  AnalyticsItem  from "./AnalyticsItem"; // Import the new component

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }
`;

export default function Analytics() {
  return (
    <Section>
      <AnalyticsItem title="Spent this month" value="$682.5" icon={<BsFillCalendar2WeekFill />} />
      <AnalyticsItem title="Earnings" value="$350.40" icon={<IoStatsChart />} />
      <AnalyticsItem title="New clients" value="321" icon={<BiGroup />} />
      <AnalyticsItem title="Activity" value="$540.50" icon={<FiActivity />} />
    </Section>
  );
}
