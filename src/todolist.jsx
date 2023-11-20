import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState,useEffect } from 'react';



function Todolist(){
    
    let [itemList, setItemList]= useState(['list1','list2']);

    function addList(){
        console.log('func called');
        if(document.getElementById('newList')){
           console.log('called');
        let val = document.getElementById('newList').value;
        itemList.push(val);
        console.log(itemList);
        setItemList([...itemList]);  
        }
      }

    return(
        <div className="todoDiv">
        
          {itemList.map((item, index) => (
            <div className='listDiv' id={`listDiv_${index}`} key={index}>{item}</div>
          ))}           
        
        <TextField required id="newList" type="text" label="Add new list" placeholder="Add new list"/>
        <Button onClick={()=> addList()} size="small" id='addListBtn' variant="outlined">Add</Button>
        </div>
    )
}
export default Todolist;
