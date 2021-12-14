import React from "react";
import Film from './Film';
import Loader from "./Loader";
import Search from "./Search";
export default class Films extends React.Component{
   state = {
      movie: [],
      loading:true
   }

   componentDidMount(){
      fetch('http://www.omdbapi.com/?apikey=65e6b2ef&s=panda')
      .then(response =>response.json())
      .then(result =>this.setState({movie: result.Search}))
      .catch(error =>console.log(error))
   }

getFilms=(text)=>{
   this.setState({loading:true})
   fetch('http://www.omdbapi.com/?apikey=65e6b2ef&s=${text}')
      .then(response =>response.json())
      .then(result =>this.setState({movie: result.Search, loading:false}))
      .catch(error =>console.log(error))
}




render(){
   console.log(this.props.search);
   return(
      <>
      <Search getFilms={this.getFilms} search={this.state.movie} />
      <div className="films">
         {
            <Loader/>
            :
            this.state.loading ? this.state.movie.map(item=> <Film item={item} key={item.imdbID}/>)
         }
      </div>
      </>
   )
}

}



