import { CooltixCheckbox } from "./UIComponents";
import styled from "styled-components";
import { H3 } from "./Typography";
import { useState } from "react";

const StatesFilter = ({ allUniqueStates, mostFrequentStates, activeFilter, onFilterChange }) => {
  const [isShowAll, setIsShowAll] = useState<boolean>(false);

  const statesToRender = isShowAll ? allUniqueStates : mostFrequentStates;

  return (
    <StyledFilterCard>
      <H3 className="mb-8">States</H3>

      {statesToRender.map((stateName: string) => (
        <StyledCheckboxWrapper key={stateName}>
          <CooltixCheckbox checked={activeFilter.includes(stateName)} onChange={() => onFilterChange(stateName)} /> {stateName}
        </StyledCheckboxWrapper>
      ))}

      <StyledShowAllToggler className="mt-8" onClick={() => setIsShowAll(!isShowAll)}>
        {!isShowAll ? "All" : "Less"}
      </StyledShowAllToggler>
    </StyledFilterCard>
  );
};

export default StatesFilter;

const StyledFilterCard = styled.div`
  display: inline-block;

  width: 272px;
  height: 100%;
  min-height: 474px;

  padding: 24px 16px 24px 24px;
  background-color: white;
  border-radius: 8px;
  /* border: 1px solid #e5e5e5; */
`;

const StyledCheckboxWrapper = styled.div`
  margin-left: -10px;
  display: flex;
  align-items: center;
`;

const StyledShowAllToggler = styled.div`
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
`;
