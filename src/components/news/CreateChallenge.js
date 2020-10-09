import React from 'react' 
import { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { challenge, challengeCreate } from '../../store/actions/newsActions';

class CreateChallenge extends Component{
    state = {
        title : '',
        wrong : '',
        postedBy : ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {user} = this.props;
        this.props.challengeCreate(this.state);
        this.props.challenge(user);
        this.props.history.push('/');
    }

    render(){
        const {auth} = this.props;
        if(!auth.uid)
        {
            return <Redirect to="/signin" />
        }
        return(
            <div className="container section">
                <div className="card">
                    <div className="card-content">
                        <h5 className="center section card-title"><strong>Challenge</strong></h5>
                        <form className="white" onSubmit={this.handleSubmit}>
                            <div className="input-field">
                                <label htmlFor="title">Title (News)</label>
                                <input type="text" id="title" required onChange={this.handleChange} value={this.state.title}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="wrong">On what grounds do you want to challenge</label>
                                <input type="text" id="wrong" required onChange={this.handleChange} value={this.state.wrong}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="postedBy">News Posted By</label>
                                <input type="text" id="postedBy" required onChange={this.handleChange} value={this.state.postedBy}/>
                            </div>
                            <div className="input-field section">
                                <button className="black btn z-depth-0">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let id = state.firebase.auth.uid;
    let users = state.firestore.ordered.users;
    let user = users ? (users.find(user => user.id == id)) : (null); //imp
    return{
        auth : state.firebase.auth,
        user:user
    }
}

const mapDispatchToProps =(dispatch) => {
    return{
        challengeCreate : (challenge) => {dispatch(challengeCreate(challenge))},
        challenge : (user) => {dispatch(challenge(user))}
    }
}
export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        {collection:'users'}
    ])) (CreateChallenge)