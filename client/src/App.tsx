import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import './App.css'
import CreateUser from './Components/CreateUser'
import ListOfUsers from './Components/ListOfUsers'
import UpdateUserPassword from './Components/UpdateUserPassword'

function App() {
  const client =  new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache()
  })
  return (
    <>
      <ApolloProvider client={client}>
        <CreateUser />

        <br />

        <ListOfUsers />

        <br />

        <UpdateUserPassword />
      </ApolloProvider>
    </>
  );
}

export default App;
