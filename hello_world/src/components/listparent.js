import React from 'react'
import ListChild from './listChild'
function listParent(){
    const name=['kunal','arora','jatin'];
    const nameList=name.map(x=><h2>{x}</h2>)
    
    const person=[
        {id:1,
        name1:'kunal'},
        {id:2,
        name1:'jatin'},
        
    ]
    const personList=person.map(person=><ListChild person={person}/>)
    return(
        <div>
        {personList}
        
        
        
        
        </div>
    )

}
export default listParent;