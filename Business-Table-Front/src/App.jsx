import React, {Fragment} from 'react';
import AppRoute from "./router/AppRoute";
import FullScreenLoader from "./components/FullScreenLoader/FullScreenLoader";

const App = () => {
    return (
        <Fragment>
             <AppRoute/>
            <FullScreenLoader/>
        </Fragment>
    );
};

export default App;