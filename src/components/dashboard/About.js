import React, { Component } from 'react'

class About extends Component{
    render(){
        return(
            <div className="container">
                <div className="card">
                    <div className="card-content">
                        <div className="card-title center"><strong>About</strong></div> <br></br>
                        <p><strong>BeQuick</strong> is an open community platform where each user can get the updates 
                            on the daily news that will be posted by the others users present on the platform. For the aforementioned
                            purpose each user has been provided with a <strong>Create News</strong> option in which they can update the 
                            news which will be available for the other users. <br></br>
                            Now definitely , the other users won't be uploading news for social service. So when a user uploads a news
                            he will be awarded with a <strong style={{color:"gold"}}>Coin</strong> which could be seen in the <strong>Users</strong> page by
                            clicking on your initials present in the <strong>Navigation bar</strong> which could be redeemed later. <br></br>
                            At the same time to avoid the spread of fake, old or violent news on the platform we have a
                            <strong> Challenge</strong> section. Each user gets to challenge any news uploaded in the platform using the 
                            <strong> Create Challenge</strong> option in the navigation bar. Other users can support the challenge created
                            and if that challenge gets a majority vote then that news will be taken off the platform. <br></br>
                            There's a <strong>Views</strong> option present on each news which shows the number of times the article has 
                            been checked by the other users using the platform and to state the obvious, a user cannot increase the Views
                            of his own post and he cannot increase the <strong>Supporters</strong> for his own Challenge.
                            Lastly each user has a personalized <strong>Users</strong> page in whcih he/she can see his/her details
                            and the activity on the platform.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About