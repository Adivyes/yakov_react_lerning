import React,{Component} from 'react'


export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {role: "Admin"}
    }

    render(){
        let {userName} = this.props;
        let {role} = this.state;
        return(
            <div id="headerDiv">
            <h1>Header</h1>
            <span>{userName}</span>
        </div> 
        )
        
    }
}
