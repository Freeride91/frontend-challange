import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Member } from "./MembersList";
import Queries from "../api/Queries";
import { Link } from "react-router-dom";
import { ReactComponent as ChevronLeft } from "../assets/chevron-left.svg";
import { theme } from "../theme/theme";
import { ErrorMessageWrapper } from "../components/UIComponents";
import Loading from "../components/Loading";

interface MemberData {
  member: Member;
}

const MemberDetailsPage = () => {
  let { id } = useParams();

  const { loading, error, data } = useQuery<MemberData>(Queries.memberById, {
    variables: {
      id: id,
    },
  });

  if (error) return <ErrorMessageWrapper>Unfortunately an error occured! :(</ErrorMessageWrapper>;
  if (loading) return <Loading />;

  return (
    <>
      <StyledPageContent>
        {data?.member && (
          <StyledMemberDetailsBox>
            <BoxHeader>
              <BackLinkHeader to="/">
                <ChevronLeft height={24} />
              </BackLinkHeader>
              Member Details
            </BoxHeader>
            <BoxContent>
              <div className="image-container">
                <img src={data?.member.profilePictureUrl} alt="profile" />
              </div>

              <DataLine>
                <LeftData>First Name</LeftData>
                <RightData>{data?.member.firstName}</RightData>
              </DataLine>
              <DataLine>
                <LeftData>Last Name</LeftData>
                <RightData>{data?.member.lastName}</RightData>
              </DataLine>
              <DataLine>
                <LeftData>E-mail</LeftData>
                <RightData>{data?.member.email}</RightData>
              </DataLine>
              <DataLine>
                <LeftData>Phone Number</LeftData>
                <RightData>{data?.member.phoneNumber}</RightData>
              </DataLine>
              <DataLine>
                <LeftData>Country</LeftData>
                <RightData>{data?.member.address.country}</RightData>
              </DataLine>
              <DataLine>
                <LeftData>State</LeftData>
                <RightData>{data?.member.address.state}</RightData>
              </DataLine>
              <DataLine>
                <LeftData>City</LeftData>
                <RightData>{data?.member.address.city}</RightData>
              </DataLine>
              <DataLine>
                <LeftData>Postal Code</LeftData>
                <RightData>{data?.member.address.postalCode}</RightData>
              </DataLine>
              <DataLine>
                <LeftData>Address</LeftData>
                <RightData>{data?.member.address.addressLine}</RightData>
              </DataLine>
            </BoxContent>
          </StyledMemberDetailsBox>
        )}

        <BackLink to="/"> ← Back To All</BackLink>
      </StyledPageContent>
    </>
  );
};

const StyledPageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledMemberDetailsBox = styled.div`
  background: white;
  border-radius: 24px;
  width: 100%;
  max-width: 540px;

  overflow: hidden;
`;

const BoxHeader = styled.div`
  background: ${theme.colors.deepBlue};
  width: 100%;
  color: white;
  font-size: 22px;
  letter-spacing: -0.02em;
  height: 60px;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

const BackLinkHeader = styled(Link)`
  position: absolute;
  left: 14px;
  top: 10px;

  border: none;
  padding: 8px;

  background: transparent;
  color: white;

  cursor: pointer;
`;

const BoxContent = styled.div`
  width: 100%;
  padding-bottom: 4px;

  .image-container {
    padding: 16px;
    text-align: center;
  }

  img {
    border-radius: 50%;
  }
`;

const DataLine = styled.div`
  height: 44px;
  width: 100%;
  color: #445691;

  display: flex;
  flex-direction: row;
  border-top: 1px solid #e9e9e9;
  padding: 12px 16px;
`;

const LeftData = styled.div`
  width: 40%;
  font-weight: 500;
  color: #5b71b6;
`;
const RightData = styled.div`
  width: 60%;
  font-weight: 700;
  border-left: 1px solid #787dde;
  padding-left: 8px;
`;

const BackLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  margin-top: 40px;
  color: #ff469f;

  border-bottom: 1px solid #ff469f;

  :hover {
    color: #8a0444;
    border-color: #8a0444;
  }
`;

export default MemberDetailsPage;
