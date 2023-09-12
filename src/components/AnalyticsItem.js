import React from "react";
import styled from "styled-components";
import { cardStyles } from "./ReusableStyles";

const AnalyticsItemWrapper = styled.div`
  ${cardStyles};
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
  transition: 0.5s ease-in-out;

  &:hover {
    background-color: #ffc107;
    color: black;
    svg {
      color: white;
    }
  }

  .logo {
    background-color: black;
    border-radius: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    svg {
      font-size: 1.5rem;
    }
  }
`;

function AnalyticsItem({ title, value, icon }) {
    return (
        <AnalyticsItemWrapper>
            <div className="content">
                <h5>{title}</h5>
                <h2>{value}</h2>
            </div>
            <div className="logo">{icon}</div>
        </AnalyticsItemWrapper>
    );
}

export default AnalyticsItem;
