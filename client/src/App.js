import React from "react";
// import EcomContainer from "./components/EcomContainer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Container } from "react-bootstrap";
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

// import Toys from './components/pages/Toys';
// import Treats from './components/pages/Treats';
// import Cart from './components/pages/Cart'

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
                                element={<AboutUs />}
                            />
                            <Route
                                path="/Products"
                                element={<Store />}
                            />
                            <Route
                                path="/SignIn"
                                element={<SignIn />}
                            />
                            <Route
                                path="/SignUp"
                                element={<SignUp />}
                            />
                            <Route
                                path="/AboutUs"
                                element={<AboutUs />}
                            />
                            <Route
                                path="/Success"
                                element={<Success />}
                            />
                            <Route
                                path="/Cancel"
                                element={<Cancel />}
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
