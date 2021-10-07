import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { SearchContext } from "../App";
import { ReactComponent as SearchIcon } from "../assets/search.svg";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { searchBy, setSearchTermGlobal } = useContext(SearchContext);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setSearchTermGlobal(e.target.value);
  };

  useEffect(() => {
    return () => {
      setSearchTermGlobal("");
    };
  }, [setSearchTermGlobal]);

  return (
    <InputWrapper>
      <LeftIconWrapper>
        <SearchIcon />
      </LeftIconWrapper>
      <StyledInput placeholder={`Search by ${searchBy}`} value={searchTerm} onChange={handleSearchInputChange} />
    </InputWrapper>
  );
};

export default SearchBox;

const InputWrapper = styled.div`
  position: relative;
`;

const LeftIconWrapper = styled.div`
  position: absolute;
  top: 15px;
  left: 19px;
`;

const StyledInput = styled.input`
  width: 464px;
  height: 48px;
  border: 1px solid #978adc;
  border-radius: 32px;
  outline: none;

  font-size: 16px;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;

  padding-left: 50px;
`;
