import React from "react";
import "./EducationItem.css";
import {NavLink} from "react-router-dom";

const EducationItem = (props) => {
    let priceLabel;
    props.isPrice ? priceLabel = props.price + " ₽" : priceLabel = props.priceBonus + " Бонусов";
    let thumb = "imutik-react-app/img/course/" + props.courseId;
    return(
        <li className="courses-sci">
            <div className="sci-figure"><img src={thumb} alt={props.title}/></div>
            <div className="sci-info">
                <p className="sci-title">{props.subject}</p>
                <p className="sci-grade">{props.grade}</p>
                <p className="sci-genre">{props.genre}</p>
                <p className="sci-meta"><NavLink to="#">Подробнее</NavLink></p>
                <p className="sci-controls"><span className="pure-button pure-button-primary btn-fluid">{priceLabel}</span></p>
            </div>
        </li>
    );
};
export default EducationItem;