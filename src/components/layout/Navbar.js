import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

class Navbar extends Component{
    render(){
        const {auth} =this.props;
        const links = auth.uid ? <SignedInLinks/> : <SignedOutLinks/>
        return(
            <nav className="nav-wrapper black">
                <div className="container">
                    <Link to="/" className="brand-logo left"><strong>BeQuick</strong></Link>
                    {links}
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth : state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar)