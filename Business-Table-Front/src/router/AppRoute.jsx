import React, {Fragment} from 'react';
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import ProductListPage from "../pages/ProductListPage";
import FullScreenLoader from "../components/FullScreenLoader/FullScreenLoader";

const AppRoute = () => {
    return (
        <Fragment>
           <BrowserRouter>
               <Routes>
                   <Route exact path="/" element={<ProductListPage/>} ></Route>
               </Routes>
           </BrowserRouter>

        </Fragment>
    );
};

export default AppRoute;