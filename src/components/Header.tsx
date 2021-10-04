import React, { useContext } from "react";
import { ReactComponent as CooltixLogo } from "../assets/logo.svg";
import styled from "styled-components";
import { theme } from "../theme/theme";
import SearchBox from "./SearchBox";
import { SearchContext } from "../App";

const Header = () => {
  const { isSearchBarEnabled } = useContext(SearchContext);

  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <CooltixLogo />
        <RightWrapper>
          {isSearchBarEnabled && <SearchBox />}
          <StyledTextPlaceholder />
          <StyledTextPlaceholder />
        </RightWrapper>
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  width: 100%;
  height: 96px;
  background: ${theme.colors.header};
  display: flex;
  align-items: center;
`;

const StyledHeaderContainer = styled.div`
  width: 100%;
  max-width: 1136px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTextPlaceholder = styled.div`
  width: 146px;
  height: 16px;
  background: #d8d8d8;
  border-radius: 32px;
  margin-left: 16px;
`;
