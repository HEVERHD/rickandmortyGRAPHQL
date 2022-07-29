import React from 'react';
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {store} from "../src/reducers/store";


//redux
import { Provider } from "react-redux";




// CLiente apollo server
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
    <App />
    </Provider>
  </ApolloProvider>
);

