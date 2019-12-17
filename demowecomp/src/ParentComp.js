import React from 'react';

function ParentComp(props)
{

  return (
    <div>
    {Boolean(props.items.length <=props.threshold) && (

<ul>
{props.items.map(s => (<li>{s}</li>))}
</ul>
    
     )}
     {Boolean(props.items.length >props.threshold) && (

      <ul>
      {props.slicedList.map(s => (<li>{s}</li>))}
      </ul>
          
           )}
      
</div>

  ) 
}
export default ParentComp;