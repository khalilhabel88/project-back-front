import React, { Component } from 'react'
// import { register } from './UserFunctions'

class Register extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         firstName:'',
    //         lastName:'',
    //         email: '',
    //         password: ''
    //     }
    //     this.onChange = this.onChange.bind(this)
    //     this.onSubmit = this.onSubmit.bind(this)
    // }
    // onChange(e) {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }
    // onSubmit(e) {
    //     e.preventDefault()
    //     const user = {
    //         firstName:this.state.firstName,
    //         lastName:this.lastName,
    //         email: this.state.email,
    //         password: this.state.password
    //     }
    //     register(user).then(res => {
    //             this.props.history.push('/login')
    //     })
    // }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form  onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">please sign in</h1>
                            <div className="form-group">
                                <label htmlFor="firstName">First name</label>
                                <input 
                                type="text" 
                                className="form-control" 
                                name="firstName"
                                placeholder="Enter you firstName"
                                // value={this.state.firstName}
                                // onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">last name</label>
                                <input 
                                type="text" 
                                className="form-control" 
                                name="lastName"
                                placeholder="Enter you lastName"
                                // value={this.state.lastName}
                                // onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input 
                                type="email" 
                                className="form-control" 
                                name="email"
                                placeholder="Enter you email"
                                // value={this.state.email}
                                // onChange={this.onChange}
                                />
                             </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" 
                                className="form-control" 
                                name="password"
                                placeholder="enter yu password"
                                // value={this.state.password}
                                // onChange={this.onChange}
                                 />
                            </div>
                                    
                                <button type="submit"
                                 className="btn btn-lg btn-block btn-primary"
                                 
                                 >
                                    Register
                                 </button>
                        </form>
            </div>
            </div>
            </div>
        )
     }
}
export default Register;