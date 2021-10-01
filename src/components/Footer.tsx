import React from "react";
import { ReactComponent as CooltixLogoWhite } from "../assets/logo_white.svg";
import { ReactComponent as Facebook } from "../assets/Facebook.svg";
import { ReactComponent as Instagram } from "../assets/Instagram.svg";
import { ReactComponent as LinkedIn } from "../assets/LinkedIn.svg";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <CooltixLogoWhite />
      <div className="email">ticket@cooltix.hu</div>
      <div className="followus">Follow us on networks</div>
      <StyledSocialBox>
        <Facebook />
        <LinkedIn />
        <Instagram />
      </StyledSocialBox>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  position: absolute;
  width: 100%;
  height: 296px;
  padding: 32px 40px;

  background: #1d1d1d;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  .email {
    margin-top: 12px;
    font-weight: 500;
  }
  .followus {
    margin-top: 24px;
    font-size: 14px;
    font-weight: 500;
  }
`;

const StyledSocialBox = styled.div`
  display: flex;
  width: 100%;
  max-width: 150px;
  justify-content: space-between;
  margin-top: 24px;
`;
