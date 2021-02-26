import React,{Component} from 'react'
import ToDoItem from './Components/toDoItems/todoItems'
import AddItem from "./Components/AddItems/AddItems"

class App extends Component{
  state={
    items:[
      { id:1,name:"ahmad",age:20},
      { id:2,name:"ali",age:22},
       { id:3,name:"amal",age:19}
    ]
  }
  deleteItem = (id)=>{
    /*
  let items=this.state.items;
  let i=items.findIndex(item=>item.id === id )
  items.splice(i,1)
  this.setState({items})
  */
 let items=this.state.items.filter(item =>{
   return item.id !== id
 })
 this.setState({items})
  }
  render(){
  return (
    <div >
      <div>ToDoListApp</div>
     <ToDoItem items={this.state.items} deleteItem={this.deleteItem} />
 
     <AddItem/>
    </div>
  );
}
}

export default App;
