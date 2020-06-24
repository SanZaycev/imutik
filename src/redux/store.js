import {applyMiddleware, combineReducers, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import educationsReducer from './educations-reducer';

const middleware = [thunk];

const reducers = combineReducers({
    educations: educationsReducer
});

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
);

window.state = store;
export default store;