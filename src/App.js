import React from "react";
class App extends React.Component{

    constructor(props){

        super();
this.state={
    isName:'Abdunabi'
}
}
getName(){
    setTimeout(()=>{
        this.setState({isName:'Shohbaxt'})
    },3000)
}
componentDidMount(){
  this.getName()
}

componentDidUpdate(){
  console.log('did update')
  document.querySelector('h1').innerHTML="New person is"+this.state.isName
}


render(){
    console.log('render')
    return(
      <div className="card">
        <h1>{this.state.isName}</h1>
      </div>
    )
}
    }

export default App;