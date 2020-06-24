import React from 'react';
import {withRouter} from 'react-router-dom';
import * as axios from "axios";
import { connect } from 'react-redux';
import { getEducationsAC, isFetchingAC, itemsFetchingAC, educationsErrorAC, switchPriceAC, filterFieldAC } from "../src/redux/educations-reducer";
import App from "./App";

class AppContainer extends React.Component{
    componentDidMount(){
        this.props.isFetchingAC(true);
        this.getEducations();
        setTimeout(()=>this.props.itemsFetchingAC(false),500);
        setTimeout(()=>this.props.isFetchingAC(false),600);
    }
    getEducations = async function(){
        try{
            const response = await axios.post('http://krapipl.imumk.ru:8082/api/mobilev1/update');
            this.props.getEducationsAC(response.data.items, this.props.location.search);
        } catch (err){
            this.props.educationsErrorAC(err);
        }
    };
    render(){
        return <App isFetching={this.props.isFetching} itemsLoading={this.props.itemsLoading} itemsFetchingAC={this.props.itemsFetchingAC} educations={this.props.educations} isPrice={this.props.isPrice} switchPrice={this.props.switchPriceAC} subject={this.props.subject} genre={this.props.genre} grade={this.props.grade} search={this.props.search} filterFieldAC={this.props.filterFieldAC} />;
    };
}
const mapStateToProps = (state) => {
    return{
        educations: state.educations.sortItems,
        subject: state.educations.subject,
        genre: state.educations.genre,
        grade: state.educations.grade,
        search: state.educations.search,
        isPrice: state.educations.isPrice,
        isFetching: state.educations.isFetching,
        itemsLoading: state.educations.itemsFetching
    }
};
const AppContainerWithRouter = withRouter(AppContainer);
export default connect(mapStateToProps, { isFetchingAC, itemsFetchingAC, getEducationsAC, educationsErrorAC, switchPriceAC, filterFieldAC })(AppContainerWithRouter);