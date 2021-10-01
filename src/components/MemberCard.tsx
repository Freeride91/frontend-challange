import styled from "styled-components";
import { H3 } from "./Typography";
import { Member } from "../pages/MembersListPage";

type MemberCardProps = {
  member: Member;
};

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  return (
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
  );
};

export default MemberCard;

const StyledMemberCard = styled.div`
  padding: 32px 16px;
  min-width: 200px;
  background-color: white;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    max-width: 80px;
    border-radius: 50%;
  }
`;

const StyledAddressBox = styled.div`
  .details {
    font-size: 12px;
    font-weight: 500;
  }
`;
