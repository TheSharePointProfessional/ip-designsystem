import React from "react";
import types from "./_generatedTypes";
import styled from "styled-components";

export default function PropsTable({ name = "" }) {
  let match = types["typescript"][name];
  if (!match || !match.properties) return null;
  return (
    <>
      <StyledProps>
        {match.properties
          .map(parseProperty)
          .sort(compareProperties)
          .map(({ name, description, type, isRequired }) => (
            <StyledRow className="row" key={name}>
              <div className="name">{name}</div>
              <div className="type">
                <code>{type}</code>
              </div>
              <div className={isRequired}>{isRequired}</div>
              <div className="description">{description}</div>
            </StyledRow>
          ))}
      </StyledProps>
      {/* <pre>{JSON.stringify(match, null, 2)}</pre>; */}
    </>
  );
}

const StyledProps = styled.div`
  .row:first-child {
    border-top: 1px solid #eee;
  }
  max-width: 900px;
`;
const StyledRow = styled.div`
  display: grid;
  grid-template-columns: 120px 120px 100px 1fr;
  align-items: center;
  border-bottom: 1px solid #eee;
  min-height: 40px;

  > * {
    display: flex;
    align-items: center;
  }
  .name {
    font-weight: bold;
    font-size: 1.1em;
    letter-spacing: 1px;
  }
  code {
    color: #bd7a27;
  }
  .Required {
    color: #a32e2e;
    font-weight: bold;
  }

  @media (max-width: 900px) {
    grid-template-columns: 120px 120px 100px 1fr;
    grid-template-rows: 40px 1fr;
    .description {
      grid-area: 2 / 1 / 3 / 5;
      padding-bottom: 10px;
    }
  }
`;

const compareProperties = (a, b) => {
  if (a.isRequired === b.isRequired) {
    return a.name < b.name ? -1 : 1;
  }
  return a.isRequired > b.isRequired ? -1 : 1;
};
const parseProperty = (property) => {
  let name = property?.name;
  let description = property?.documentation?.contentsRaw || "";
  let isRequired = property?.flags?.isOptional ? "Optional" : "Required";
  let type = property?.type || "";
  return {
    name,
    type,
    isRequired,
    description,
  };
};
