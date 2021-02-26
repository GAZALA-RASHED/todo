import React from 'react';
import "./toDoItem.css"
const ToDoItem=(props)=>{
    const {items ,deleteItem}=props;
    let length= items.length;
    const listItems=length ? (
        items.map((item)=>{
            return(
                <div key={item.id}>
            <span>{item.name}</span>
            <span>{item.age}</span>
            <span onClick={()=>deleteItem(item.id)}>&times;</span>
                </div>
            )
                }) ): (
                    <div>There is no item to show </div>
                )
    
    return(
           
<div >
    <div>
<span>Name</span>
<span>Age</span>
<span>Action</span>
    </div>
    
    {listItems}
    </div>
    );
}
export default ToDoItem;