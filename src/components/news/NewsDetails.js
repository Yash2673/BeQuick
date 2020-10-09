import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import logo from './Image-Not.png'
class NewsDetails extends Component{
    render(){
        const {item,auth} = this.props;
        if(!auth.uid)
        {
            return <Redirect to="/signin" />
        }
        if(item)
        {
            return(
                <div className="container">
                    <div className="card">
                        <div className="card-content">
                            <p className="card-title center"><strong>{item.title}</strong></p>
                            <br></br>
                            <img src={logo} style={{float:"left",marginRight:"10px",marginTop:"5px",height:"200px"}} alt="No Image"/>
                            <span>{item.description}</span>
                            <div className="card-actions">
                                <br></br><br></br>
                                <div className="left">
                                    <strong><span className="grey-text">Posted by :</span></strong> {item.firstName} {item.lastName}
                                </div>
                                <div className="grey-text right">
                                    <strong>Views {item.views}</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className="container loader-holder">
                <div className="loader" />
                    <div className="loader-text display-4 ml-4">
                        <h4>Please Wait...</h4>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state,ownProps) => {
    let id=ownProps.match.params.id;
    let news=state.firestore.data.news;
    let item = news ? news[id] : null
    return{
        item : item,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'news'}
    ]))
    (NewsDetails)