import React from 'react'
import { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { challenge } from '../../store/actions/newsActions';
import NewsList from '../news/NewsList';
import Challenge from './Challenge';

class Dashboard extends Component{
    render(){
        const {auth} = this.props;
        const {news,challenges} = this.props;
        if(!auth.uid)
        {
            return <Redirect to="/signin" />
        }
        else
        {
            if(news || challenges)
            {
                return(
                    <div>
                        <div className="row">
                        <div className="container">
                            <div className="col s12 m7 section">
                                <NewsList news={news}/>
                            </div>
                        </div>
                        <div className="col s12 m4 offest-m1">
                            <Challenge challenges={challenges}/>
                        </div>
                        </div>
                    </div>
                )
            }
            else
            {
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
}

const mapStateToProps = (state) => {
    //console.log(state);
    return{
        news : state.firestore.ordered.news,
        auth : state.firebase.auth,
        challenges : state.firestore.ordered.challenges
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection : 'news',orderBy:['timestamp','desc']},
        {collection : 'challenges'}
    ]))
(Dashboard)