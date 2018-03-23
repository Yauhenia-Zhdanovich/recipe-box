import React from 'react';
import { connect } from 'react-redux';
import Button from '../styles/button';
import { Window, Text, TextArea, Label, ButtonGroup, Background } from '../styles/modal';

class editModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:this.props.name,
            ingredients:this.props.ingredients.join(', ')
        }
        this.handleChange = this.handleChange.bind(this);
    }
    onClose(e){
        this.setState({name:this.props.name,ingredients:this.props.ingredients.join(', ')},()=>{
            this.props.onClose(false);
        })
    }
    handleChange(event){
        if(event.target.id === 'name'){
            this.setState({name:event.target.value})
        }else{
            this.setState({ingredients:event.target.value})
        }
    }
    onEdit(){
        let name = this.state.name.trim();
        let temp = this.state.ingredients.trim();
        let ingredients = temp.split(',');
        ingredients.forEach(element => {
            element.trim();
        });
        this.props.editRecipe(name,ingredients,this.props.id);
        this.setState({name:name,ingredients:temp},()=>{
            this.props.onClose(false);
        })
    }
    render(){
        if(!this.props.show){
            return null;
        }else{
            return (
                <div>
                    <Background onClick={this.onClose.bind(this)}/>
                    <Window>
                        <h3>Edit Recipe</h3>
                        <label>Recipe <Text type='text' onChange={this.handleChange} id='name' value={this.state.name} placeholder='Recipe Name'/></label>
                        <Label>Ingredients <TextArea onChange={this.handleChange} id='ingridients' value={this.state.ingredients} placeholder='Enter ingrediens,separated by commas'/></Label>
                        <ButtonGroup>
                            <Button onClick={this.onEdit.bind(this)}>Edit Recipe</Button>
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
export let EditModal = connect(mapStateToProps, mapDispatchToProps)(editModal);