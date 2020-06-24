import React from "react";
import "./Preloader.css";
import loader from "../../assets/images/preloader.svg";

const Preloader = (props) => {
    return props.isFetching ? <div className="preloader-box"><span className="preloader" style={{backgroundImage: 'url(' + loader + ')'}} /></div> : null;
};

export default Preloader;