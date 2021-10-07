import React, { Dispatch, SetStateAction, useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import MembersList from "./pages/MembersList";
import MemberDetails from "./pages/MemberDetails";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { theme } from "./theme/theme";
import ScrollToTop from "./components/ScrollToTop";

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
        <StyledMainContainer>
          <Header />

          <StyledPageContainer>
            <Router>
              <ScrollToTop />
              <Switch>
                <Route path="/:id">
                  <MemberDetails />
                </Route>
                <Route path="/">
                  <MembersList />
                </Route>
              </Switch>
            </Router>
          </StyledPageContainer>

          <Footer />
        </StyledMainContainer>
      </SearchContext.Provider>
    </ApolloProvider>
  );
}

export default App;

const StyledMainContainer = styled.div`
  min-height: 100vh;
  position: relative;
`;

const StyledPageContainer = styled.main`
  width: 100%;
  max-width: 1136px;
  padding-top: 64px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: ${theme.size.footerHeight + 64}px;
  margin: 0 auto;
`;
