import styled from "styled-components";
import { H3 } from "./Typography";
import { Member } from "../pages/MembersList";
import { Link } from "react-router-dom";
import { theme } from "../theme/theme";

type MemberCardProps = {
  member: Member;
};

const MemberListCard: React.FC<MemberCardProps> = ({ member }) => {
  return (
    <StyledLink to={`/${member.id}`}>
      <StyledMemberCard>
        <img src={member.profilePictureUrl} alt="member" />
        <StyledName className="mt-12">
          {member.firstName} {member.lastName}
        </StyledName>
        <StyledAddressBox>
          <p className="mt-16">{member.address.state}</p>
          <p className="smaller mt-12">{member.address.addressLine}</p>
          <p className="smaller">{member.address.city}</p>
        </StyledAddressBox>
      </StyledMemberCard>
    </StyledLink>
  );
};

export default MemberListCard;

const StyledMemberCard = styled.div`
  padding: 32px 16px;
  min-width: 200px;
  background-color: white;
  color: #2e2e2e;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    max-width: 80px;
    border-radius: 50%;
  }

  :hover {
    box-shadow: 0px 0px 6px rgba(167, 90, 255, 0.322);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledName = styled.div`
  font-size: 20px;
  line-height: 26px;
  font-weight: 700;
`;

const StyledAddressBox = styled.div`
  .smaller {
    font-size: 12px;
    font-weight: 500;
  }
`;
