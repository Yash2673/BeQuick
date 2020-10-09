import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { views } from '../../store/actions/newsActions';
import NewsSummary from './NewsSummary'

class NewsList extends Component{

    handleClick = (item) => {
        const {auth} = this.props;
        if(auth.uid!=item.uid)
            this.props.views(item);
    }

    render(){
        const {news} = this.props;
        return(
            <div>
                <strong style={{position:"relative",left:"25px",top:"17px",fontSize:"30px"}}>Headlines</strong>
                {news && news.map(item => {
                    return(
                        <Link to={"news/" + item.id} key={item.id} onClick={()=> {this.handleClick(item)}}><NewsSummary news={item}/></Link>
                    )
                })}   
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
        views : (item) => {dispatch(views(item))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewsList)