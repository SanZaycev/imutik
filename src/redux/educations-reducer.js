import { GET_EDUCATIONS, EDUCATIONS_ERROR, EDUCATIONS_LOADING, CLEAR_EDUCATIONS, IS_FETCHING, ITEMS_FETCHING, SWITCH_PRICE, FILTER_FIELD } from "./constants";

const initialState = {
    items: [],
    sortItems: [],
    subject: "",
    genre: "",
    grade: "",
    search: "",
    errors: null,
    isFetching: true,
    itemsFetching: true,
    isPrice: true
};

const educationsReducer = (state= initialState, action) => {
    switch (action.type){
        case EDUCATIONS_LOADING:
            return { ...state, isLoading: action.isLoading };
        case EDUCATIONS_ERROR:
            return { ...state, error: action.msg };
        case CLEAR_EDUCATIONS:
            return { ...state, items: [], sortItems: [], isFetching: true };
        case GET_EDUCATIONS:
            let sortItems = [];
            let subject;
            let genre;
            let grade;
            let search;
            let urlGET = new URLSearchParams(action.search);
            let found = {};
            urlGET.forEach((p, key) => { found[key] = p });
            console.log(found);

            if(found.subject && found.genre && found.grade && !found.search){
                subject = found.subject;
                genre = found.genre;
                grade = found.grade;
                search = "";
                for(let i = 0; i < action.educations.length; i++){
                    if(action.educations[i].subject === found.subject && action.educations[i].genre === found.genre && action.educations[i].grade === found.grade){
                        sortItems = [ ...sortItems, action.educations[i] ];
                    }
                }
                console.log('1');
            }
            if(found.subject && found.genre && found.grade && found.search){
                subject = found.subject;
                genre = found.genre;
                grade = found.grade;
                search = found.search;
                const regex = new RegExp(found.search.toLowerCase());
                for(let i = 0; i < action.educations.length; i++){
                    console.log(regex.test(action.educations[i].subject.toLowerCase()));
                    if(action.educations[i].subject === found.subject && action.educations[i].genre === found.genre && action.educations[i].grade === found.grade && (regex.test(action.educations[i].subject.toLowerCase()) || regex.test(action.educations[i].genre.toLowerCase()) || regex.test(action.educations[i].grade))){
                        sortItems = [ ...sortItems, action.educations[i] ];
                    }
                }
                console.log('2');
            }
            if(found.subject && found.genre && !found.grade && !found.search){
                subject = found.subject;
                genre = found.genre;
                grade = "";
                search = "";
                for(let i = 0; i < action.educations.length; i++){
                    if(action.educations[i].subject === found.subject && action.educations[i].genre === found.genre){
                        sortItems = [ ...sortItems, action.educations[i] ];
                    }
                }
                console.log('3');
            }
            if(found.subject && found.genre && !found.grade && found.search){
                subject = found.subject;
                genre = found.genre;
                grade = "";
                search = found.search;
                const regex = new RegExp(found.search.toLowerCase());
                for(let i = 0; i < action.educations.length; i++){
                    if(action.educations[i].subject === found.subject && action.educations[i].genre === found.genre && (regex.test(action.educations[i].subject.toLowerCase()) || regex.test(action.educations[i].genre.toLowerCase()) || regex.test(action.educations[i].grade))){
                        sortItems = [ ...sortItems, action.educations[i] ];
                    }
                }
                console.log('4');
            }
            if(found.subject && !found.genre && found.grade && !found.search){
                subject = found.subject;
                genre = "";
                grade = found.grade;
                search = "";
                for(let i = 0; i < action.educations.length; i++){
                    if(action.educations[i].subject === found.subject && action.educations[i].grade === found.grade){
                        sortItems = [ ...sortItems, action.educations[i] ];
                    }
                }
                console.log('5');
            }
            if(found.subject && !found.genre && found.grade && found.search){
                subject = found.subject;
                genre = "";
                grade = found.grade;
                search = found.search;
                const regex = new RegExp(found.search.toLowerCase());
                for(let i = 0; i < action.educations.length; i++){
                    if(action.educations[i].subject === found.subject && action.educations[i].grade === found.grade && (regex.test(action.educations[i].subject.toLowerCase()) || regex.test(action.educations[i].genre.toLowerCase()) || regex.test(action.educations[i].grade))){
                        sortItems = [ ...sortItems, action.educations[i] ];
                    }
                }
                console.log('6');
            }
            if(found.subject && !found.genre && !found.grade && !found.search){
                subject = found.subject;
                genre = "";
                grade = "";
                search = "";
                for(let i = 0; i < action.educations.length; i++){
                    if(action.educations[i].subject === found.subject){
                        sortItems = [ ...sortItems, action.educations[i] ];
                    }
                }
                console.log('7');
            }
            if(found.subject && !found.genre && !found.grade && found.search){
                subject = found.subject;
                genre = "";
                grade = "";
                search = found.search;
                const regex = new RegExp(found.search.toLowerCase());
                for(let i = 0; i < action.educations.length; i++){
                    if(action.educations[i].subject === found.subject && (regex.test(action.educations[i].subject.toLowerCase()) || regex.test(action.educations[i].genre.toLowerCase()) || regex.test(action.educations[i].grade))){
                        sortItems = [ ...sortItems, action.educations[i] ];
                    }
                }
                console.log('8');
            }
            if(!found.subject && found.genre && !found.grade && !found.search){
                subject = "";
                genre = found.genre;
                grade = "";
                search = "";
                for(let i = 0; i < action.educations.length; i++){
                    if(action.educations[i].genre === found.genre){
                        sortItems = [ ...sortItems, action.educations[i] ];
                    }
                }
                console.log('9');
            }
            if(!found.subject && found.genre && !found.grade && found.search){
                subject = "";
                genre = found.genre;
                grade = "";
                search = found.search;
                const regex = new RegExp(found.search.toLowerCase());
                for(let i = 0; i < action.educations.length; i++){
                    if(action.educations[i].genre === found.genre && (regex.test(action.educations[i].subject.toLowerCase()) || regex.test(action.educations[i].genre.toLowerCase()) || regex.test(action.educations[i].grade))){
                        sortItems = [ ...sortItems, action.educations[i] ];
                    }
                }
                console.log('10');
            }
            if(!found.subject && !found.genre && found.grade && !found.search){
                subject = "";
                genre = "";
                grade = found.grade;
                search = "";
                for(let i = 0; i < action.educations.length; i++){
                    if(action.educations[i].grade === found.grade){
                        sortItems = [ ...sortItems, action.educations[i] ];
                    }
                }
                console.log('11');
            }
            if(!found.subject && !found.genre && found.grade && found.search){
                subject = "";
                genre = "";
                grade = found.grade;
                search = found.search;
                const regex = new RegExp(found.search.toLowerCase());
                for(let i = 0; i < action.educations.length; i++){
                    if(action.educations[i].grade === found.grade && (regex.test(action.educations[i].subject.toLowerCase()) || regex.test(action.educations[i].genre.toLowerCase()) || regex.test(action.educations[i].grade))){
                        sortItems = [ ...sortItems, action.educations[i] ];
                    }
                }
                console.log('12');
            }
            if(!found.subject && found.genre && found.grade && !found.search){
                subject = "";
                genre = found.genre;
                grade = found.grade;
                search = "";
                for(let i = 0; i < action.educations.length; i++){
                    if(action.educations[i].genre === found.genre && action.educations[i].grade === found.grade){
                        sortItems = [ ...sortItems, action.educations[i] ];
                    }
                }
                console.log('13');
            }
            if(!found.subject && found.genre && found.grade && found.search){
                subject = "";
                genre = found.genre;
                grade = found.grade;
                search = found.search;
                const regex = new RegExp(found.search.toLowerCase());
                for(let i = 0; i < action.educations.length; i++){
                    if(action.educations[i].genre === found.genre && action.educations[i].grade === found.grade && (regex.test(action.educations[i].subject.toLowerCase()) || regex.test(action.educations[i].genre.toLowerCase()) || regex.test(action.educations[i].grade))){
                        sortItems = [ ...sortItems, action.educations[i] ];
                    }
                }
                console.log('14');
            }
            if(!found.subject && !found.genre && !found.grade && found.search){
                subject = "";
                genre = "";
                grade = "";
                search = found.search;
                const regex = new RegExp(found.search.toLowerCase());
                for(let i = 0; i < action.educations.length; i++){
                    if(regex.test(action.educations[i].subject.toLowerCase()) || regex.test(action.educations[i].genre.toLowerCase()) || regex.test(action.educations[i].grade)){
                        sortItems = [ ...sortItems, action.educations[i] ];
                    }
                }
                console.log('15');
            }
            if(!found.subject && !found.genre && !found.grade && !found.search){
                subject = "";
                genre = "";
                grade = "";
                search = "";
                sortItems = action.educations;
                console.log('16');
            }
            console.log(sortItems);
            return { ...state, items: action.educations, sortItems: sortItems, subject: subject, genre: genre, grade: grade, search: search };
        case IS_FETCHING:
            return{ ...state, isFetching: action.isLoading };
        case ITEMS_FETCHING:
            return{ ...state, itemsFetching: action.isLoading };
        case SWITCH_PRICE:
            return{ ...state, isPrice: JSON.parse(action.isPrice) };
        case FILTER_FIELD:
            let sorted = [];
            let params = new URLSearchParams(action.search);
            let foundGET = {};
            params.forEach((p, key) => { foundGET[key] = p });
            console.log(foundGET);

            if(foundGET.subject && foundGET.genre && foundGET.grade && !foundGET.search){
                for(let i = 0; i < state.items.length; i++){
                    if(state.items[i].subject === foundGET.subject && state.items[i].genre === foundGET.genre && state.items[i].grade === foundGET.grade){
                        sorted = [ ...sorted, state.items[i] ];
                    }
                }
                console.log('1');
            }
            if(foundGET.subject && foundGET.genre && foundGET.grade && foundGET.search){
                const regex = new RegExp(foundGET.search.toLowerCase());
                for(let i = 0; i < state.items.length; i++){
                    console.log(regex.test(state.items[i].subject.toLowerCase()));
                    if(state.items[i].subject === foundGET.subject && state.items[i].genre === foundGET.genre && state.items[i].grade === foundGET.grade && (regex.test(state.items[i].subject.toLowerCase()) || regex.test(state.items[i].genre.toLowerCase()) || regex.test(state.items[i].grade))){
                        sorted = [ ...sorted, state.items[i] ];
                    }
                }
                console.log('2');
            }
            if(foundGET.subject && foundGET.genre && !foundGET.grade && !foundGET.search){
                for(let i = 0; i < state.items.length; i++){
                    if(state.items[i].subject === foundGET.subject && state.items[i].genre === foundGET.genre){
                        sorted = [ ...sorted, state.items[i] ];
                    }
                }
                console.log('3');
            }
            if(foundGET.subject && foundGET.genre && !foundGET.grade && foundGET.search){
                const regex = new RegExp(foundGET.search.toLowerCase());
                for(let i = 0; i < state.items.length; i++){
                    if(state.items[i].subject === foundGET.subject && state.items[i].genre === foundGET.genre && (regex.test(state.items[i].subject.toLowerCase()) || regex.test(state.items[i].genre.toLowerCase()) || regex.test(state.items[i].grade))){
                        sorted = [ ...sorted, state.items[i] ];
                    }
                }
                console.log('4');
            }
            if(foundGET.subject && !foundGET.genre && foundGET.grade && !foundGET.search){
                for(let i = 0; i < state.items.length; i++){
                    if(state.items[i].subject === foundGET.subject && state.items[i].grade === foundGET.grade){
                        sorted = [ ...sorted, state.items[i] ];
                    }
                }
                console.log('5');
            }
            if(foundGET.subject && !foundGET.genre && foundGET.grade && foundGET.search){
                const regex = new RegExp(foundGET.search.toLowerCase());
                for(let i = 0; i < state.items.length; i++){
                    if(state.items[i].subject === foundGET.subject && state.items[i].grade === foundGET.grade && (regex.test(state.items[i].subject.toLowerCase()) || regex.test(state.items[i].genre.toLowerCase()) || regex.test(state.items[i].grade))){
                        sorted = [ ...sorted, state.items[i] ];
                    }
                }
                console.log('6');
            }
            if(foundGET.subject && !foundGET.genre && !foundGET.grade && !foundGET.search){
                for(let i = 0; i < state.items.length; i++){
                    if(state.items[i].subject === foundGET.subject){
                        sorted = [ ...sorted, state.items[i] ];
                    }
                }
                console.log('7');
            }
            if(foundGET.subject && !foundGET.genre && !foundGET.grade && foundGET.search){
                const regex = new RegExp(foundGET.search.toLowerCase());
                for(let i = 0; i < state.items.length; i++){
                    if(state.items[i].subject === foundGET.subject && (regex.test(state.items[i].subject.toLowerCase()) || regex.test(state.items[i].genre.toLowerCase()) || regex.test(state.items[i].grade))){
                        sorted = [ ...sorted, state.items[i] ];
                    }
                }
                console.log('8');
            }
            if(!foundGET.subject && foundGET.genre && !foundGET.grade && !foundGET.search){
                for(let i = 0; i < state.items.length; i++){
                    if(state.items[i].genre === foundGET.genre){
                        sorted = [ ...sorted, state.items[i] ];
                    }
                }
                console.log('9');
            }
            if(!foundGET.subject && foundGET.genre && !foundGET.grade && foundGET.search){
                const regex = new RegExp(foundGET.search.toLowerCase());
                for(let i = 0; i < state.items.length; i++){
                    if(state.items[i].genre === foundGET.genre && (regex.test(state.items[i].subject.toLowerCase()) || regex.test(state.items[i].genre.toLowerCase()) || regex.test(state.items[i].grade))){
                        sorted = [ ...sorted, state.items[i] ];
                    }
                }
                console.log('10');
            }
            if(!foundGET.subject && !foundGET.genre && foundGET.grade && !foundGET.search){
                for(let i = 0; i < state.items.length; i++){
                    if(state.items[i].grade === foundGET.grade){
                        sorted = [ ...sorted, state.items[i] ];
                    }
                }
                console.log('11');
            }
            if(!foundGET.subject && !foundGET.genre && foundGET.grade && foundGET.search){
                const regex = new RegExp(foundGET.search.toLowerCase());
                for(let i = 0; i < state.items.length; i++){
                    if(state.items[i].grade === foundGET.grade && (regex.test(state.items[i].subject.toLowerCase()) || regex.test(state.items[i].genre.toLowerCase()) || regex.test(state.items[i].grade))){
                        sorted = [ ...sorted, state.items[i] ];
                    }
                }
                console.log('12');
            }
            if(!foundGET.subject && foundGET.genre && foundGET.grade && !foundGET.search){
                for(let i = 0; i < state.items.length; i++){
                    if(state.items[i].genre === foundGET.genre && state.items[i].grade === foundGET.grade){
                        sorted = [ ...sorted, state.items[i] ];
                    }
                }
                console.log('13');
            }
            if(!foundGET.subject && foundGET.genre && foundGET.grade && foundGET.search){
                const regex = new RegExp(foundGET.search.toLowerCase());
                for(let i = 0; i < state.items.length; i++){
                    if(state.items[i].genre === foundGET.genre && state.items[i].grade === foundGET.grade && (regex.test(state.items[i].subject.toLowerCase()) || regex.test(state.items[i].genre.toLowerCase()) || regex.test(state.items[i].grade))){
                        sorted = [ ...sorted, state.items[i] ];
                    }
                }
                console.log('14');
            }
            if(!foundGET.subject && !foundGET.genre && !foundGET.grade && foundGET.search){
                const regex = new RegExp(foundGET.search.toLowerCase());
                for(let i = 0; i < state.items.length; i++){
                    if(regex.test(state.items[i].subject.toLowerCase()) || regex.test(state.items[i].genre.toLowerCase()) || regex.test(state.items[i].grade)){
                        sorted = [ ...sorted, state.items[i] ];
                    }
                }
                console.log('15');
            }
            if(!foundGET.subject && !foundGET.genre && !foundGET.grade && !foundGET.search){
                sorted = state.items;
                console.log('16');
            }
            console.log(sorted);
            return{ ...state, sortItems: sorted, [action.eventName]: action.eventValue };
        default:
            return { ...state, isFetching: false, itemsFetching: false };
    }
};

//export const clearEducationsAC = () => ({ type: CLEAR_EDUCATIONS });
export const filterFieldAC = (eventName, eventValue, search) => ({type: FILTER_FIELD, eventName, eventValue, search});
export const educationsErrorAC = (msg) => ({ type: EDUCATIONS_ERROR, msg });
export const isFetchingAC = (isLoading) => ({type: IS_FETCHING, isLoading});
export const itemsFetchingAC = (isLoading) => ({type: ITEMS_FETCHING, isLoading});
export const switchPriceAC = (isPrice) => ({type: SWITCH_PRICE, isPrice});
export const getEducationsAC = (educations, search) => ({ type: GET_EDUCATIONS, educations, search});
export default educationsReducer;