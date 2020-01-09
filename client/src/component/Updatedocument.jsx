import React from 'react'
import { getdocument, updatedocument } from '../action/action'
import { connect } from 'react-redux'
import {InputGroup,FormControl,Button }from 'react-bootstrap'
import {Link} from 'react-router-dom'





class Updatedocument extends React.Component {
    state = {
        document: {}
    }
    componentDidMount = () => {
        this.props.getdocument()
        const arr = this.props.document.filter(el => el._id === this.props.id)
        let document = arr[0]
        this.setState({
            document
        })

    }


    render() {

        return (
<div className='style'>
            <div className ='addcour'>
              <h2>Update Document !</h2>
                <InputGroup className="mb-3">
                    
                    <InputGroup.Prepend>
                        
                    </InputGroup.Prepend>
                    <FormControl  placeholder="titel"
            value={this.state.document && this.state.document.titel}
            onChange={e => {
              e.preventDefault();
              this.setState({
                document: { ...this.state.document, titel: e.target.value }
              });
            }} />
            
                </InputGroup>
                <InputGroup className="mb-3">
                    
                    <InputGroup.Prepend>
                        
                    </InputGroup.Prepend>
                    <FormControl  placeholder="Description"
            value={this.state.document && this.state.document.description}
            onChange={e => {
              e.preventDefault();
              this.setState({
                document: { ...this.state.document, description: e.target.value }
              });
            }} />
            
                </InputGroup>

                <InputGroup className="mb-3">
                    
                    <InputGroup.Prepend>
                    
                    </InputGroup.Prepend>
                    <FormControl  placeholder="Rates"
            value={this.state.document && this.state.document.rates}
            onChange={e => {
              e.preventDefault();
              this.setState({
                document: { ...this.state.document, rates: e.target.value }
              });
            }} />
            
                </InputGroup>
                <InputGroup className="mb-3">
                    
                    <InputGroup.Prepend>
                        
                    </InputGroup.Prepend>
                    <FormControl  placeholder="Image"
            value={this.state.document && this.state.document.image}
            onChange={e => {
              e.preventDefault();
              this.setState({
                document: { ...this.state.document, image: e.target.value }
              });
            }} />
            
                </InputGroup>
                <Link to='/listdocument'>
                <Button variant="success"
                onclick={()=>{
                    this.props.updatedocument(
                    this.state.document._id ,{
                        titel:this.props.document.titel,
                        description:this.props.document.description,
                        rates:this.props.document.rates,
                        image:this.props.document.image
                    }
                    )
                }
                }
                >Update Document
                </Button>
                </Link>
            </div>
            </div>
        )
    }

}


export default connect(state => {
    return { document: state.document };
},
    { getdocument, updatedocument })(Updatedocument)


