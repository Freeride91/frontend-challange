import styled from "styled-components";
import { Member } from "../pages/MembersList";
import { Link } from "react-router-dom";

type MemberListCardProps = {
  member: Member;
};

const MemberListCard: React.FC<MemberListCardProps> = ({ member }) => {
  return (
    <StyledLink to={`/${member.id}`}>
      <StyledMemberListCard>
        <img src={member.profilePictureUrl} alt="member" />
        <StyledName className="mt-12">
          {member.firstName} {member.lastName}
        </StyledName>
        <StyledAddressBox>
          <div className="state mt-16">{member.address.state}</div>
          <div className="address mt-12">{member.address.addressLine}</div>
          <div className="address">{member.address.city}</div>
        </StyledAddressBox>
        <StyledBottomDecorator />
      </StyledMemberListCard>
    </StyledLink>
  );
};

export default MemberListCard;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledMemberListCard = styled.div`
  padding: 32px 16px;
  min-width: 200px;
  background-color: white;
  color: #2e2e2e;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  transition: all 0.2s;

  position: relative;
  overflow: hidden;

  img {
    max-width: 80px;
    border-radius: 50%;
  }

  :hover {
    box-shadow: 0px 0px 6px rgba(84, 52, 255, 0.322);
  }
`;

const StyledName = styled.div`
  font-size: 20px;
  line-height: 26px;
  font-weight: 700;
`;

const StyledAddressBox = styled.div`
  font-weight: 500;

  .state {
    color: #2f1f84;
  }

  .address {
    font-size: 12px;
  }
`;

const StyledBottomDecorator = styled.div`
  position: absolute;
  bottom: 0;
  background-color: #9b92d3;

  width: 100%;
  height: 8px;
`;
