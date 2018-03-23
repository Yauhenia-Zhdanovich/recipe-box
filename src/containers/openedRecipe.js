import React from 'react';
import { EditModal } from '../containers/editModal';
import { v4 } from 'uuid';
import { connect } from 'react-redux';
import Button from '../styles/button';
import styled from 'styled-components';

const List = styled.ul`
    list-style:none;
    padding-left:0;
`;

class OpenedRecipe extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showModal:false
        }
    }
    onModalShow(){
        this.setState({showModal:true});
    }
    onClose(){
        this.setState({showModal:false})
    }
    onDelete(){
        this.props.deleteRecipe(this.props.id);
    }
    render(){
        let index = this.props.recipes.data.findIndex((e)=>{
            return e.id === this.props.id;
        });
        if(!this.props.recipes.data[index].isOpen){
            return null;
        }else{
            return (
                <div>
                    <List>
                        {
                            this.props.ingredients.map((item)=>{
                                return (<li key={v4()}>{item}</li>)
                            })
                        }
                    </List>
                    <Button onClick={this.onDelete.bind(this)}>Delete</Button>
                    <Button onClick={this.onModalShow.bind(this)}>Edit</Button>
                    <EditModal show={this.state.showModal} onClose={this.onClose.bind(this)} id={this.props.id} name={this.props.name} ingredients={this.props.ingredients}/>
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
        deleteRecipe:(id)=>{
            dispatch({
                type:"DELETE_RECIPE",
                payload:{
                    id:id
                }
            });
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(OpenedRecipe);