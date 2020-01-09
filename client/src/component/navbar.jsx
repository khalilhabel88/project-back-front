import React,{Component} from 'react'
import {Link,withRouter} from 'react-router-dom'

class Navbar extends Component{

    // logOut(e){
    //     e.preventDefault()
    //     localStorage.removeItem('usertoken')
    //     this.props.history.push("/")

    // }
    render(){
        return(
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link" >
                        login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link" >
                        register
                    </Link>
                </li>
            </ul>
        )
        
        const userLink =(
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link" >
                        user
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                        logOut
                    </a>
                </li>
            </ul>
        )
            return(
                <div className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                    <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbar1"
                        aria-controls="navbar1"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-md-center" id="navbar1">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    home
                                </Link>
                            </li>
                        </ul>
                        {/* {localStorage.usertoken?userLink:loginRegLink} */}
                    </div>
                </div>
            )
    }
}
export default withRouter(Navbar)