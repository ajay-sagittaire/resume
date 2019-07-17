import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Query } from "react-apollo";
import AppRouter from "./routes";
import { query, variables } from "./api/resume";
import 'semantic-ui-css/semantic.min.css'

const client = new ApolloClient({
  uri: process.env.REACT_APP_GO_SERVER + "/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Query query={query} variables={variables}>
      {({ data, loading, error, refetch }) => {
        if (loading) return null;
        if (error) return `Error! ${error}`;
        return <AppRouter resume={data.getCV} refetchData={refetch} variables={variables}/>;
      }}
    </Query>
  </ApolloProvider>,
  document.getElementById("app")
);
