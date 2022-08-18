import {createStore, applyMiddleware, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// import reducer from '../reducers/CartReducer';
// import BadgeReducer from '../reducers/BadgeReducer';

import AddDataReducer from './reducer/Increment';
import AddToDoReducer  from '../../AddToDoReducer';

const middleware = [thunk]

const rootReducer = combineReducers({
    AddReducer : AddDataReducer,
    AddToDoReducer : AddToDoReducer,
})

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
