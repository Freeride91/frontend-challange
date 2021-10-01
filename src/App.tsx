import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import MembersListPage from "./pages/MembersListPage";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";

const client = new ApolloClient({
  uri: "https://cooltix-frontend-challenge.herokuapp.com",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />

      <StyledPageContainer>
        <MembersListPage />
      </StyledPageContainer>

      <Footer />
    </ApolloProvider>
  );
}

export default App;

const StyledPageContainer = styled.main`
  width: 100%;
  max-width: 1136px;
  padding: 64px 32px 156px;
  margin: 0 auto;
`;
