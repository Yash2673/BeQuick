import React from 'react'
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signIn, update } from '../../store/actions/authActions';

class SignIn extends Component{
    state = {
        email : '',
        password : '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value,
        });
        this.props.update();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
        this.props.history.push('/');
    }

    render(){
        const {auth} = this.props;
        if(auth.uid)
        {
            return <Redirect to="/" />
        }
        else
        {
            const {authError} = this.props;
            return(
                <div className="container section">
                    <div className="card">
                        <div className="card-content">
                                <h5 className="center section card-title"><strong>Sign-In</strong></h5>
                                <form className="white" onSubmit={this.handleSubmit}>
                                    <div className="input-field">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" required onChange={this.handleChange} value={this.state.email}/>
                                    </div>
                                    <div className="input-field">
                                        <label htmlFor="password" >Password</label>
                                        <input type="password" id="password" required value={this.state.password} onChange={this.handleChange}/>
                                    </div>
                                    <div className="input-field section">
                                        <button className="black btn z-depth-0">Submit</button>
                                    </div>
                                    <div className="center red-text">
                                        {authError ? <p>{authError}</p> : null}
                                    </div>
                                </form> 
                        </div>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return{
        auth : state.firebase.auth,
        authError  : state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signIn : (creds) => dispatch(signIn(creds)),
        update : ()  => dispatch(update())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)