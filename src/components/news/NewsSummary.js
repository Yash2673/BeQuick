import React, { Component } from 'react'

class NewsSummary extends Component{
    render(){
        const news = this.props.news;
        return(
            <div className="card z-depth-0 black-text" style={{borderRadius:"10px",border:"1px solid lightgrey"}}>
                <div className="card-content">
                    <p className="card-title center"><strong>{news.title}</strong></p>
                    <p><strong>{news.content}</strong></p>
                    <div className="card-actions">
                    <br></br>
                        <div className="left">
                        <strong><span className="grey-text">Posted by :</span> {news.firstName} {news.lastName}</strong>
                        </div>
                        <div className="right">
                            <strong><span className="grey-text">Views</span></strong> <strong>{news.views}</strong>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsSummary