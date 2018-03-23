import {v4} from 'uuid';

const recipeReducer = (state = {data:[
    {
        id:'first',
        name:'italian spaghetti',
        ingredients:['pasta', 'meat', 'basil', 'salt'],
        isOpen:false
    },
    {
        id:'second',
        name: 'sushi',
        ingredients: ['rice', 'salmon', 'nori', 'avocado', 'philadelphia cheese'],
        isOpen:false
    },
    {
        id:'third',
        name:'pizza',
        ingredients:['dough', 'cheese', 'olives', 'salami', 'tomtatoes'],
        isOpen:false
    }
]},action)=>{
    switch(action.type){
        case 'DELETE_RECIPE':
        let index = state.data.findIndex((e)=>{
            return e.id === action.payload.id;
        });
        state.data.splice(index,1);
        state = {
            ...state
        };
        break;
        case 'ADD_RECIPE':
        let newRecipe = {
            id:v4(),
            name: action.payload.name,
            ingredients: action.payload.ingredients
        }
        state.data.push(newRecipe);
        state = {
            ...state
        };
        break;
        case 'EDIT_RECIPE':
        let indexOfRecipe = state.data.findIndex((e)=>{
            return e.id === action.payload.id;
        });
        state.data[indexOfRecipe].name = action.payload.name;
        state.data[indexOfRecipe].ingredients = action.payload.ingredients;
        state = {
            ...state
        };
        break;
        case'TOGGLE_RECIPE':
        let position = state.data.findIndex((e)=>{
            return e.id === action.payload.id;
        });
        if(state.data[position].isOpen){
            state.data[position].isOpen = false;
        }else{
            state.data[position].isOpen = true;
        }
        state = {
            ...state
        };
        break;
        default:return state;
    }
    return state;
};

export default recipeReducer;