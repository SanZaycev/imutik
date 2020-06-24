import React from "react";
import "./ItemsPreloader.css";
import loader from "../../assets/images/preloader.svg";

const ItemsPreloader = (props) => {
    return props.isLoad ? <li className="items-preloader"><span className="loader" style={{backgroundImage: 'url(' + loader + ')'}} /></li> : null;
};

export default ItemsPreloader;