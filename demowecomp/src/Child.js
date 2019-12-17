import React from 'react';

function child(props)
{

  return (
<div>
    {Boolean(props.items.length >props.threshold) &&
    !Boolean(props.toExpand) &&
    (      
      <button onClick={()=>props.handleAdd(props.toExpand)}>More</button>        
           )}

{Boolean(props.items.length > props.threshold) &&
    Boolean(props.toExpand) &&
    (      
      <button onClick={()=>props.handleAdd(props.toExpand)}>Less</button>        
           )}


</div>

  ) 
}
export default child;