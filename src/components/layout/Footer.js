import React, { Component } from 'react'

class Footer extends Component {
    render(){
        return(
            <div style={{height:"70px",width:"100%",background:"black",position:"absolute",bottom:"0"}}>
                <p style={{color:"white",position:"absolute",left:"45%",bottom:"10px"}}><strong>Copyright &copy; Yash 2020</strong></p>
            </div>
        )
    }
}

export default Footer