import React from 'react';
import { connect } from "react-redux";
import { v4 } from 'uuid';
import Header from './components/header';
import ListItem from './containers/listItem';
import AddModal from './containers/addModal';
import styled from 'styled-components';
import Button from './styles/button';

const AddSection = styled.div`
    display:flex;
    justify-content:flex-end;
    margin-right:3rem;
    @media only screen and (min-width : 480px) {
        margin-right:5rem;
    }
    @media only screen and (min-width : 768px) {
        margin-right:5rem;
    }
    @media only screen and (min-width : 992px) {
        margin-right:5rem;
    }
    @media only screen and (min-width : 1200px) {
        margin-right:5rem;
    }
`;

const Main = styled.main`
    margin:0 auto;
    font-size:1.5rem;
    @media only screen and (min-width : 480px) {
        width:90%;
    }
    @media only screen and (min-width : 768px) {
        width:70%;
    }
    @media only screen and (min-width : 992px) {
        width:60%;
    }
    @media only screen and (min-width : 1200px) {
        width:50%;
    }

`;

const List = styled.ul`
    list-style:none;
`;

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showModal:false
        }
    }
    onModalShow(){
        this.setState({showModal:true});
    }
    onClose(e){
        this.setState({showModal:false})
    }
    render(){
        return (
            <div>
                <Header/>
                <Main>
                    <AddSection>
                        <div>Add Recipe</div>
                        <Button onClick={this.onModalShow.bind(this)}>Add</Button>
                    </AddSection>
                    <List>
                        {
                            this.props.recipes.data.map((item)=>{
                            return (<ListItem key={v4()} name={item.name} ingredients={item.ingredients} id={item.id} />)
                            })
                        }
                    </List>
                </Main>
            <AddModal show={this.state.showModal} onClose={this.onClose.bind(this)} type='ADD'/>
            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(App);
