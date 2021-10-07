import { CooltixCheckbox } from "./UIComponents";
import styled from "styled-components";
import { H3 } from "./Typography";
import { useState } from "react";

type StatesFilterProps = {
  allUniqueStates: string[];
  mostFrequentStates: string[];
  activeFilter: string[];
  onFilterChange: (stateName: string) => void;
};

const StatesFilter: React.FC<StatesFilterProps> = ({ allUniqueStates, mostFrequentStates, activeFilter, onFilterChange }) => {
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

      {!isShowAll && (
        <StyledShowAllToggler className="mt-8" onClick={() => setIsShowAll(true)}>
          All
        </StyledShowAllToggler>
      )}
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
