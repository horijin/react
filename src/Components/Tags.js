import { useState } from "react";

export default  function Tags(){
    const[tags ,setTags]=useState(["tech"]);
   
    function fun(evt){
           
          if(evt.key==="Enter"){
           setTags([...tags,evt.target.value]);
         
           console.log(tags);
           evt.target.value="";
          }
            
    }

    function remove(index){
        setTags(tags.filter((_,id)=>index!==id));
    }
    return(
        <>
       
        
        
   {
tags.map((item,id)=>(
    <span class="ml-3 p-2 badge text-bg-primary"  key={id}>{item}
    <span onClick={()=>remove(id)} class=" ml-2 p-0 bg-dark border border-light rounded-circle">X</span>
    </span>
))

 }
    
        <input type="text" onKeyUp={fun}/>
   

        </>
    );
}