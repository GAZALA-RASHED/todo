import React,{Component} from 'react'
import './AddItems.css'
class AddItem extends Component{
    state ={
        name:"",age:""
    }
 handelChange=(e)=>{
this.setState({
    [e.target.id]:e.target.value
})
    }

    handelSubmit=(e)=>{
e.preventDefaulte();

    }

render(){
    return(
        <div>
            <form onSubmit={this.handelSubmit}>
            <input type="text" placeholder="enter name ..." id="name" onChange={this.handelChange}/>
            <input type="number" placeholder="enter age ..." id="age" onChange={this.handelChange}/>
            <input type="submit" value="Add"/>
            </form>
        </div>
    )
}
}

export default AddItem; 