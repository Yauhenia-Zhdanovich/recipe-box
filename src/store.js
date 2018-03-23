import {createStore, combineReducers} from "redux";
import recipeReducer from './reducers/recipeReducer';
import {loadState} from './localStorage';

const persisitedState = loadState();
if(persisitedState){
    persisitedState.recipeReducer.data.forEach((e)=>{
        e.isOpen = false;
    });
}

let store = createStore(combineReducers({recipeReducer}),persisitedState);
export default store;