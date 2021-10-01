import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import StatesFilter from "../components/StatesFilter";
import styled from "styled-components";
import MemberCard from "../components/MemberCard";
import { H1 } from "../components/Typography";
import { topKFrequent } from "../utils/utils";

import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Queries from "../api/Queries";

enum OrderBy {
  none = "none",
  firstName = "firstName",
  lastName = "lastName",
}

interface MemberAddress {
  country: string;
  state: string;
  postalCode: string;
  city: string;
  addressLine: string;
}

export interface Member {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  address: MemberAddress;
  phoneNumber: string;
  profilePictureUrl: string;
}

interface MembersData {
  allMembers: Member[];
}

function MembersListPage() {
  const { loading, error, data } = useQuery<MembersData>(Queries.ALL_MEMBERS);

  const [uniqueStates, setUniqueStates] = useState<string[]>([]);
  const [mostFrequentStates, setMostFrequentStates] = useState<string[]>([]);

  const [orderBy, setOrderBy] = useState<OrderBy>(OrderBy.none);
  const [activeFilter, setActiveFilter] = useState<Array<string>>([]);

  useEffect(() => {
    if (!loading && !error && data) {
      let states: string[] = data.allMembers.map((member: Member) => member.address.state);
      let uniqueSortedStates = states.filter((item, index) => states.indexOf(item) === index).sort();
      setUniqueStates(uniqueSortedStates);
      setMostFrequentStates(topKFrequent(states, 5));
    }
  }, [loading, error, data]);

  const handleOrderSelect = (e) => {
    setOrderBy(e.target.value);
  };

  const onFilterChange = (stateName) => {
    if (activeFilter.includes(stateName)) {
      const index = activeFilter.indexOf(stateName);
      const newAcitveFilter = [...activeFilter];
      newAcitveFilter.splice(index, 1);
      setActiveFilter(newAcitveFilter);
    } else {
      setActiveFilter([...activeFilter, stateName]);
    }
  };

  let membersToBeRendered = data?.allMembers ? [...data.allMembers] : [];

  if (orderBy !== OrderBy.none) {
    membersToBeRendered.sort((a, b) => {
      if (a[orderBy] < b[orderBy]) {
        return -1;
      }
      if (a[orderBy] > b[orderBy]) {
        return 1;
      }
      return 0;
    });
  }

  if (activeFilter.length !== 0) {
    membersToBeRendered = membersToBeRendered.filter((member) => activeFilter.includes(member.address.state));
  }

  if (loading) return <H1>Loading...</H1>;
  if (error) return <H1>Error!</H1>;

  return (
    <>
      <H1>Members</H1>
      <StyledPageContent>
        <StatesFilter
          allUniqueStates={uniqueStates}
          mostFrequentStates={mostFrequentStates}
          activeFilter={activeFilter}
          onFilterChange={onFilterChange}
        />
        <StyledListSection>
          <StyledListHeaderBox>
            <span className="itemnum-info">
              Showing {membersToBeRendered.length} of {data?.allMembers.length} items{" "}
            </span>
            <div className="sorting-wrapper">
              <span className="order">Order:</span>
              <FormControl>
                <Select value={orderBy} onChange={handleOrderSelect} displayEmpty>
                  <MenuItem value={OrderBy.none}>None</MenuItem>
                  <MenuItem value={OrderBy.firstName}>First name</MenuItem>
                  <MenuItem value={OrderBy.lastName}>Last Name</MenuItem>
                </Select>
              </FormControl>
            </div>
          </StyledListHeaderBox>

          <StyledMemberListGrid>
            {membersToBeRendered?.map((member: Member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </StyledMemberListGrid>
        </StyledListSection>
      </StyledPageContent>
    </>
  );
}

export default MembersListPage;

const StyledPageContent = styled.div`
  margin-top: 24px;
  display: flex;
`;

const StyledListSection = styled.div`
  margin-left: 16px;
  width: 100%;
  min-height: 474px;
`;

const StyledListHeaderBox = styled.div`
  width: 100%;
  height: 60px;

  background-color: white;
  border-radius: 8px;

  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .itemnum-info {
    font-size: 16px;
    color: #222d39;
  }

  .sorting-wrapper {
    width: 100%;
    max-width: 180px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .order {
    font-weight: 500;
  }
`;

const StyledMemberListGrid = styled.div`
  display: grid;
  margin-top: 16px;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
`;
