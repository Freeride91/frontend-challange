import React, { Dispatch, SetStateAction, useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import MembersListPage from "./pages/MembersListPage";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MemberDetailsPage from "./pages/MemberDetailsPage";

const client = new ApolloClient({
  uri: "https://cooltix-frontend-challenge.herokuapp.com",
  cache: new InMemoryCache(),
});

export enum SearchBy {
  name = "name",
}

interface SearchState {
  searchTermGlobal: string;
  setSearchTermGlobal: Dispatch<SetStateAction<string>>;
  isSearchBarEnabled: boolean;
  setIsSearchBarEnabled: Dispatch<SetStateAction<boolean>>;
  searchBy: SearchBy;
}

const initialState: SearchState = {
  searchTermGlobal: "",
  setSearchTermGlobal: () => {},
  isSearchBarEnabled: false,
  setIsSearchBarEnabled: () => {},
  searchBy: SearchBy.name,
};

export const SearchContext = React.createContext<SearchState>(initialState);

function App() {
  const [searchTermGlobal, setSearchTermGlobal] = useState("");
  const [isSearchBarEnabled, setIsSearchBarEnabled] = useState(false);

  return (
    <ApolloProvider client={client}>
      <SearchContext.Provider value={{ searchTermGlobal, setSearchTermGlobal, isSearchBarEnabled, setIsSearchBarEnabled, searchBy: SearchBy.name }}>
        <Header />
        <StyledPageContainer>
          <Router>
            <Switch>
              <Route path="/:id">
                <MemberDetailsPage />
              </Route>
              <Route path="/">
                <MembersListPage />
              </Route>
            </Switch>
          </Router>
        </StyledPageContainer>

        <Footer />
      </SearchContext.Provider>
    </ApolloProvider>
  );
}

export default App;

const StyledPageContainer = styled.main`
  width: 100%;
  max-width: 1136px;
  padding: 64px 32px;
  margin: 0 auto;
`;
