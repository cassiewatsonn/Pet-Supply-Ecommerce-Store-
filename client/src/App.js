import React from "react";
// import EcomContainer from "./components/EcomContainer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from "react-bootstrap";
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
import NavBarComponent from './components/navbar';
import Admin from './components/pages/Admin';

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
                {/* <Container> */}
                {/* <NavBarComponent> </NavBarComponent> */}
                    <Router>
                        <>
                            <Header />
                            <NavTabs />
                            <Routes>
                                {/* <Route
                            path="/Toys"
                            element={<Toys />}
                        />
                        <Route
                            path="/Treats"
                            element={<Treats />}
                        /> */}
                                <Route
                                    path="/"
                                    element={<AboutUs />}
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
                                {/* <Route
                            path="/Cart"
                            element={<Cart />}
                        /> */}
                            </Routes>
                            <Footer />
                        </>
                    </Router>
                {/* </Container> */}
            </CartProvider>

        </ApolloProvider>
    )
};

export default App;
