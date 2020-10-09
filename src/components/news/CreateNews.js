import React from 'react' 
import { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { article, newsCreate } from '../../store/actions/newsActions';

class CreateNews extends Component{
    state = {
        title : '',
        content : '',
        description:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {user} = this.props;
        this.props.newsCreate(this.state);
        this.props.article(user);
        this.setState({
            title : '',
            content : ''
        })
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
                        <h5 className="center section card-title"><strong>Create News</strong></h5>
                        <form className="white" onSubmit={this.handleSubmit}>
                            <div className="input-field">
                                <label htmlFor="title">Title</label>
                                <input type="text" id="title" required onChange={this.handleChange} value={this.state.title}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="content">Content</label>
                                <input type="text" id="content" required onChange={this.handleChange} value={this.state.content}/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="description">Description</label>
                                <input type="text" id="description" required onChange={this.handleChange} value={this.state.description}/>
                            </div>
                            <div className>
                                <span style={{fontSize:"17px"}}>Image Upload : </span>
                                <input type="file" accept=".jpg" id="file"/>
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
    //console.log(user);
    return{
        auth : state.firebase.auth,
        user : user
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        newsCreate : (news) => {dispatch(newsCreate(news))},
        article : (user) => {dispatch(article(user))}
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        {collection:'users'}
    ]))(CreateNews)