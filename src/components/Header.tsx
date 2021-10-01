import React from "react";
import { ReactComponent as CooltixLogo } from "../assets/logo.svg";
import styled from "styled-components";
import { theme } from "../theme/theme";

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <CooltixLogo />
        <StyledTextPlaceholder />
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

const StyledTextPlaceholder = styled.div`
  width: 176px;
  height: 16px;
  background: #d8d8d8;
  border-radius: 32px;
`;