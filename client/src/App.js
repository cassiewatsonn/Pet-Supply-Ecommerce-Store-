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
import Settings from './components/pages/settings';
import Admin from './components/pages/Admin';


import CartProvider from './CartContext';

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


const App = () => {
    return (
        <ApolloProvider client={client}>
            <CartProvider>
                    <Router>
                        <>
                            <Header />
                            <NavTabs />
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
                                {/* <Route

                            path="/Cart"
                            element={<Cart />}
                        /> */}
                        </Routes>
                        <Footer />
                    </>
                </Router>

            </CartProvider>

        </ApolloProvider>
    )
};

export default App;
