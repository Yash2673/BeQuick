import React from 'react'
import { Component } from 'react';
import user from './User.png'
import fb from './fb.png'
import insta from './insta.png'
import linkedin from './in.png'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

class UserProfile extends Component{
    render(){
        const {auth,profile} = this.props;
        if(!auth.uid)
        {
            return <Redirect to="/signin" />
        }
        else
        {
            if(profile.firstName)
            {
                return(
                    <div className="container">
                        <div className="card">
                            <div className="card-content">
                                <div>
                                    <div style={{float:"left"}}>
                                        <img src={user}  width="420px" alt="user"  />
                                    </div>
                                    <div>
                                        WELCOME USER ,
                                        <div style={{fontSize:"50px",textTransform:"uppercase"}}><p><strong>{profile.firstName} {profile.lastName}</strong></p></div>
                                        <p className="section"><strong>{profile.designation}</strong></p>
                                        <p>{profile.bio}</p><br></br>
                                        <div >
                                            <strong>Date of Birth : </strong> <span>{profile.dob}</span>
                                        </div>
                                        <div style={{marginTop:"7px"}}>
                                            <strong>Email : </strong> <span>{auth.email}</span>
                                        </div>
                                        <div style={{marginTop:"7px"}}>
                                            <strong>Phone : </strong> <span>{profile.phone}</span>
                                        </div>
                                        <div style={{marginTop:"7px"}}>
                                            <strong>Home : </strong> <span>{profile.home}</span>
                                        </div>
                                        <div style={{marginTop:"7px"}}>
                                            <strong>News Articles Updated : </strong> <span>{profile.news_added}</span>
                                        </div>
                                        <div style={{marginTop:"7px"}}>
                                            <strong>Challenges : </strong> <span>{profile.challenges}</span>
                                        </div>
                                        <div style={{marginTop:"7px"}}>
                                            <strong>Coins Earned :  <span style={{color:"gold"}}>{profile.coins}</span></strong>
                                        </div><br/> <br></br>
                                        <div>
                                            <img src={linkedin} alt="in" style={{height:"35px",width:"35px",float:"right",marginTop:"9px",marginLeft:"3px"}}/>
                                            <img src={insta} alt="insta" style={{height:"45px",width:"55px",float:"right",marginTop:"4px",marginRight:"4px"}} />  
                                            <img src={fb} alt="fb" style={{height:"55px",width:"55px",float:"right"}} />
                                        </div>
                                        <br></br><br></br><br></br>
                                    </div>
                                </div>
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
        auth : state.firebase.auth,
        profile : state.firebase.profile
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'users'}
    ])
)
    (UserProfile)