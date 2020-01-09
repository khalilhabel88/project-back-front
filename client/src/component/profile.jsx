import React ,{Component} from 'react'
// import jwt_decode from "jwt-decode"

class Profile extends Component{
    // constructor(){
    //     super()
    //     this.state={
    //         firstName:'',
    //         lastName:'',
    //         email:'',
    //         password:''
    //     }
    // }
    // componentDidMount(){
    //     const token=localStorage.usertoken
    //     const decoded=jwt_decode(token)
    //     this.setState({
    //         firstName:decoded.firstName,
    //         lastName:decoded.lastName,
    //         email:decoded.email
    //     })
    // }
    render(){
        return(
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">Profile</h1>
                        <h2>first Name</h2>
                        {/* {this.state.firstName} */}
                
                        <h2>Last Name</h2>
                        {/* {this.state.lastName} */}
                        <h2>Email</h2>
                        {/* {this.state.email} */}

                    </div>
                </div>
            </div>
        )
    }
}
export default Profile;