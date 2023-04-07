import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import { setContext } from '@apollo/client/link/context';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavTabs from './components/NavTabs';
import AboutUs from './components/pages/AboutUs';
import Footer from './components/Footer';
import Header from './components/Header';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/Login';
import Cancel from './components/pages/Cancel';
import Success from './components/pages/Success';
import Store from './components/pages/Store';
import Home from './components/pages/Home';
import Settings from './components/pages/settings-panels/settings';
import Admin from './components/pages/admin-panels/Admin';
import CartProvider from './CartContext';

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';
//Construction main GraphQL API endpoint 
const httpLink = createHttpLink({
    uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
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

//Setting the Routes 
const App = () => {
    return (
        <div className="background">
            <ApolloProvider client={client}>
                <CartProvider>
                    <Router>
                        <>
                        <div className="header">
                            <Header />
                        
                            <NavTabs />
                        </div>
                            <Routes>
                                <Route
                                    path="/"
                                    element={<Home />}
                                />
                                <Route
                                    path="/products"
                                    element={<Store />}
                                />
                                <Route
                                    path="/signin"
                                    element={<SignIn />}
                                />
                                <Route
                                    path="/signup"
                                    element={<SignUp />}
                                />
                                <Route
                                    path="/aboutus"
                                    element={<AboutUs />}
                                />
                                <Route
                                    path="/success"
                                    element={<Success />}
                                />
                                <Route
                                    path="/cancel"
                                    element={<Cancel />}
                                />
                                <Route
                                    path="/admin"
                                    element={<Admin />}
                                />
                                <Route
                                    path="/settings"
                                    element={<Settings />}
                                />
                            </Routes>
                            <Footer />
                        </>
                    </Router>
                </CartProvider>
            </ApolloProvider>
        </div>
    )
};

export default App;
