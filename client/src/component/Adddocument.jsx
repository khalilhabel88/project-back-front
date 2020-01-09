import React from "react"
import {Form,Button,}from'react-bootstrap'
import { connect } from 'react-redux'
import {Link}from 'react-router-dom'
import { adddocument } from '../action/action'


class Adddocument extends React.Component {
    state = {
        titel: "",
        description: "",
        rates: "",
        image: ""
    }
    render() {
         return (
             <div className ='styleadd'>
            <div className ='addcours'>
            
                <h2>Add Document !</h2>
            
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label></Form.Label>
                        <Form.Control placeholder="Titel" onChange={e => {
                            this.setState({ titel: e.target.value });
                        }} />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label></Form.Label>
                        <Form.Control placeholder="Description" onChange={e => {
                            this.setState({ description: e.target.value });
                        }} />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label></Form.Label>
                        <Form.Control placeholder="Rates" onChange={e => {
                            this.setState({ rates: e.target.value });
                        }} />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label></Form.Label>
                        <Form.Control placeholder="Image" onChange={e => {
                            this.setState({ image: e.target.value });
                        }} />
                    </Form.Group>
                
                <Link to="/listdocument">
                <Button variant="success"
                onClick={()=>{
                    this.props.adddocument(this.state)
                }}
                >Ajout avec Success</Button>
                </Link>
            </div>
            </div>
        )
    }

}

export default connect(null, { adddocument })(Adddocument)