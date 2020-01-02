import React from 'react'
function Fragment(){
    const nameList=[{name:"kunal",age:21},{name:"Jatin",age:28}]
    const name=nameList.map(names=><h2 key={names.age}>{names.name}</h2>);
    
    
    return (
        <React.Fragment>
            {name}
        </React.Fragment>
        
    )
}
export default Fragment