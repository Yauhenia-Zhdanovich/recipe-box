import React from 'react';
import {connect} from "react-redux";
import Button from '../styles/button';
import { Window, Text, TextArea, Label, ButtonGroup, Background } from '../styles/modal';

class Modal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:'',
            ingredients:''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    onClose(e){
        this.setState({name:'',ingredients:''},()=>{
            this.props.onClose(false);
        })
        this.props.onClose(false);
    }
    handleChange(event){
        if(event.target.id === 'name'){
            this.setState({name:event.target.value})
        }else{
            this.setState({ingredients:event.target.value})
        }
    }
    onAdd(){
        let name = this.state.name.trim();
        let ingrediensString = this.state.ingredients.trim();
        let ingredients = ingrediensString.split(',');
        ingredients.forEach((elem)=>{
            elem.trim();
        })
        this.props.addRecipe(name,ingredients);
        this.onClose();
    }
    render(){
        if(!this.props.show){
            return null;
        }else{
            return (
                <div>
                    <Background onClick={this.onClose.bind(this)}/>
                    <Window>
                        <h3>Add Recipe</h3>
                        <label>Recipe <Text type='text' onChange={this.handleChange} id='name' value={this.state.name} placeholder='Recipe Name'/></label>
                        <Label>Ingredients <TextArea onChange={this.handleChange} id='ingridients' value={this.state.ingredients} placeholder='Enter ingrediens,separated by commas'/></Label>
                        <ButtonGroup>
                            <Button onClick={this.onAdd.bind(this)}>Add Recipe</Button>
                            <Button onClick={this.onClose.bind(this)}>Close</Button>
                        </ButtonGroup>
                    </Window>
                </div>
            )
        }
    }
}
const mapStateToProps = (state)=>{
    return {
       recipes: state.recipeReducer
    };
 };
const mapDispatchToProps = (dispatch)=>{
    return {
        addRecipe:(name,ingredients)=>{
            dispatch({
                type:"ADD_RECIPE",
                payload:{
                    name:name,
                    ingredients:ingredients
                }
            });
        },
        editRecipe:(name,ingredients,id)=>{
            dispatch({
                type:"EDIT_RECIPE",
                payload:{
                    name:name,
                    ingredients:ingredients,
                    id:id
                }
            });
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal);