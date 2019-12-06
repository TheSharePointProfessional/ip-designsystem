import React from "react";
import styled from "styled-components";
import { format } from "date-fns";
export default function BigDate({ date = new Date(), className = "", styles = {} }) {
  return (
    <StyledBigDate className={className} style={styles}>
      <div className="month">{format(date, "MMM")}</div>
      <div className="date">{format(date, "d")}</div>
    </StyledBigDate>
  );
}

const StyledBigDate = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  color: #fff;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  > * {
    position: relative;
  }
  .month {
    text-transform: uppercase;
    font-weight: 300;
    font-size: 16px;
    line-height: 16px;
  }
  .date {
    font-size: 28px;
    line-height: 28px;
    font-weight: 600;
  }
`;
