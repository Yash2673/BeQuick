import React from 'react'
import { Component } from 'react';
import { connect } from 'react-redux';
import { support } from '../../store/actions/newsActions'

class Challenge extends Component{

    handleClick = (challenge) => {
        const {auth} = this.props;
        //console.log(challenge);
        if(auth.uid!=challenge.uid)
            this.props.support(challenge);
        else
            alert("You cannot support yourself");
    }

    render(){
        const {challenges} = this.props;
        return(
            <div className="card z-depth-0" style={{borderRadius:"10px",border:"2px solid lightgrey"}}>
                <div className="card-content">
                    <h4 className="card-title center" style={{fontSize:"30px"}}><strong>Challenges</strong></h4>
                    <ol>
                        {challenges && challenges.map(challenge => {
                            return(
                                    <li key={challenge.uid}> 
                                        <div className="card z-depth-0">
                                            <div className="card-content">
                                                <div className="card-title"><strong>{challenge.title}</strong></div>
                                                <p><strong>{challenge.wrong}</strong></p>
                                                <p>{challenge.postedBy} challenged by {challenge.firstName}</p>
                                                <strong><p >Supporters : {challenge.supporters}</p></strong>
                                                <button style={{marginTop:"8px"}} onClick={()=>{this.handleClick(challenge)}} className="btn black">Support</button>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}               
                    </ol>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth : state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        support : (item) => {dispatch(support(item))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Challenge)