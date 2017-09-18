import React,{Component } from 'react';
import FloatingBtn from './FloatingBtn';
import AddPage from '../blogApp/AddPage'
import {Modal, Button}  from 'react-bootstrap'
import { Provider } from 'react-redux'

import { GetAllBlog, GetAllCategories } from './blogActions'


export default class BlogList extends  Component {
    constructor(props){
        super(props);
        this.state={
            modalIsOpen:false,
            categories:[]
        }
    }

    closeModal = () => {
        this.setState({modalIsOpen:!this.state.modalIsOpen});

    }
    renderModal=()=>{
        return(
            <Modal
              show={this.state.modalIsOpen}
              onHide={this.closeModal}
              container={this}
              aria-labelledby="contained-modal-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title">Add Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Provider store={this.props.store}>
                        <AddPage store={this.props.store} />
                    </Provider>
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={this.closeModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
    componentWillMount() {
        GetAllBlog().then((blogs) => {
            this.props.store.dispatch({type:'GET_ALL',blogs});
        });
        GetAllCategories().then((categories)=>{
            this.props.store.dispatch({type:'GET_ALL_CAT',categories});
        });
    }

    openAddModal = () =>{
        this.setState({modalIsOpen:!this.state.modalIsOpen});
    }

    render(){
        return(
            <div>
                <ul>
                    {this.props.store.getState().BlogReducer.map((item)=> {
                         return(
                             <div key={item.id} style={{display:'inline-block',margin:5}}>
                                <h2>{item.title}</h2>
                                <img src={item.image} style={{width:400,height:200}}/>
                                <h5 style={{width:400}}>{item.body}</h5>
                            </div>
                             )
                                                            })}
                </ul>
            <FloatingBtn openAddModal={this.openAddModal}>  + </FloatingBtn>
                {this.renderModal()}
            </div>
        )
    }

}