import React from "react";
// import EcomContainer from "./components/EcomContainer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import { setContext } from '@apollo/client/link/context';
import NavTabs from './components/NavTabs'
import AboutUs from './components/pages/AboutUs'
import Footer from './components/Footer'
import Header from './components/Header'
import SignUp from './components/pages/SignUp'
import SignIn from './components/pages/SignIn'
import Toys from './components/pages/Toys'
import Treats from './components/pages/Treats'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
  } from '@apollo/client';
  const httpLink = createHttpLink({
    uri: '/graphql',
  });
  
  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });
  
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });


const App = () =>{
    return (
        <ApolloProvider client={client}>
        <Router>
            <> 
            <Header/>
        <NavTabs/>
        <Routes>
        <Route
            path="/Toys"
            element={<Toys/>}
            />
        <Route
            path="/Treats"
            element={<Treats/>}
            />
        <Route
            path="/SignIn"
            element={<SignIn/>}
            />
        <Route
            path="/SignUp"
            element={<SignUp/>}
            />
            <Route
            path="/AboutUs"
            element={<AboutUs/>}
            />
        </Routes>
        <Footer/>
            </>
        </Router>
            </ApolloProvider>
    )
};

export default App;
