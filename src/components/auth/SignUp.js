import React from 'react'
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/actions/authActions';

class SignUp extends Component{
    state = {
        email : '',
        password : '',
        firstName:'',
        lastName:'',
        designation:'',
        bio:'',
        dob:'',
        phone:'',
        home:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }

    render(){
        const {auth} = this.props;
        if(auth.uid)
        {
            return <Redirect to="/signin" />
        }
        const {authError} = this.props;
        return(
            <div className="container section">
                <div className="card">
                    <div className="card-content">
                        <h5 className="center section card-title"><strong>Sign-Up</strong></h5>
                        <form className="white" onSubmit={this.handleSubmit}>
                            <div className="input-field">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" id="firstName" required onChange={this.handleChange} value={this.state.firstName}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" id="lastName" required onChange={this.handleChange} value={this.state.lastName}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="designation">Designation</label>
                                <input type="text" id="designation" required onChange={this.handleChange} value={this.state.designation}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="bio">Bio (2 lines about yourself)</label>
                                <input type="text" id="bio" required onChange={this.handleChange} value={this.state.bio}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="dob">Date of Birth</label>
                                <input type="text" id="dob" required onChange={this.handleChange} value={this.state.dob}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="phone">Mobile Number</label>
                                <input type="number" minLength="10" maxLength="10" id="phone" required onChange={this.handleChange} value={this.state.phone}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="home">City</label>
                                <input type="text" id="home" required onChange={this.handleChange} value={this.state.home}/>
                            </div>
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

const mapStateToProps = (state) => {
    return{
        auth : state.firebase.auth,
        authError : state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signUp : (newUser) => {dispatch(signUp(newUser))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)