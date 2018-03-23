import React from 'react';
import OpenedRecipe from '../containers/openedRecipe';
import {connect} from "react-redux";
import styled from 'styled-components';

const StyledName = styled.span`
    cursor:pointer;
    text-decoration:underline;
    color:#222f5b;
`;

class ListItem extends React.Component{
    onToggle(id){
        this.props.toggleRecipe(id);
    }
    render(){
        return (
            <li>
                <StyledName  onClick={this.onToggle.bind(this,this.props.id)}>{this.props.name}</StyledName>
                <OpenedRecipe id={this.props.id} ingredients={this.props.ingredients} name={this.props.name}/>
            </li>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
       recipes: state.recipeReducer
    };
 };
const mapDispatchToProps = (dispatch)=>{
    return {
        toggleRecipe:(id)=>{
            dispatch({
                type:"TOGGLE_RECIPE",
                payload:{
                    id:id
                }
            });
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ListItem);