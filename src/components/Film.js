import React from 'react';


function Film({item}) {
console.log(item);
   return (
      <>
         <div class="card item">
            <div class="card-image waves-effect waves-block waves-light">
               <img class="activator" src={item.Poster}/>
            </div>
            <div class="card-content">
               <span class="card-title activator grey-text text-darken-4">{item.Title}</span>
               <p>{item.Type}</p><span>{item.Year}</span>
            </div>
         </div>
      </>
   );
}

export default Film;