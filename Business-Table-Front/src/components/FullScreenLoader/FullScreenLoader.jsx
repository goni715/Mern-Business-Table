import React, {Fragment} from 'react';
import {useSelector} from "react-redux";
import {selectLoader} from "../../redux/state-slice/settings-slice";
import LoaderSVG from '../../assets/images/Loader.svg'


const FullScreenLoader = () => {


    const Loader = useSelector(selectLoader);


    return (
        <Fragment>
            <div className={Loader+" LoadingOverlay"}>
               <div className="LoadingContainer">
                 <img src={LoaderSVG} className="LoaderIMG" alt="logo" />
               </div>
           </div>
        </Fragment>
    );
};
export default FullScreenLoader;