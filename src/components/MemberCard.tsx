import styled from "styled-components";
import { H3 } from "./Typography";
import { Member } from "../pages/MembersListPage";
import { Link } from "react-router-dom";

type MemberCardProps = {
  member: Member;
};

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  return (
    <StyledLink to={`/${member.id}`}>
      <StyledMemberCard>
        <img src={member.profilePictureUrl} alt="member" />
        <H3 className="mt-12">
          {member.firstName} {member.lastName}
        </H3>
        <StyledAddressBox>
          <p className="mt-16">{member.address.state}</p>
          <p className="details mt-12">{member.address.addressLine}</p>
          <p className="details">{member.address.city}</p>
        </StyledAddressBox>
      </StyledMemberCard>
    </StyledLink>
  );
};

export default MemberCard;

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

const StyledAddressBox = styled.div`
  .details {
    font-size: 12px;
    font-weight: 500;
  }
`;
