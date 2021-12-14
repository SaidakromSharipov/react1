import React, { Component } from 'react';

class Search extends Component {

   state = {
      film: ''
   }

   render() {
      console.log(this.props)
      return (
         <div>
            <div class="row">
               <div class="input-field col s6">
                  <input
                     id="first_name2"
                     type="text"
                     class="validate"
                     value={this.state.film}
                     onChange={(e) => (this.setState({ film:e.target.value }))}
                  />
               </div>
               <button className="btn bt" onClick={()=>(this.props.getFilms(this.state.film))}>search movie</button>
            </div>
         </div>
      );
   }
}

export default Search;