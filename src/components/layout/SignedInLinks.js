import React from 'react'
import { Component } from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom'
import { signOut } from '../../store/actions/authActions';

class SignedInLinks extends Component{
    render(){
        const {profile} = this.props;
        return(
            <strong><ul className="right">
                <li><NavLink to="/createNews">Create News</NavLink></li>
                <li><NavLink to="/createChallenge">Challenge</NavLink></li>
                <li><a onClick={this.props.signOut}>Logout</a></li>
                <li><NavLink to="/user" className="btn btn-floating blue"><strong>{profile.initials}</strong></NavLink></li>
            </ul></strong>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        profile : state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signOut : () => {dispatch(signOut())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignedInLinks)