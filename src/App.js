import React from 'react';

export default class  App extends React.Component{

    constructor(props){
        super();
        this.state={
            name:'Abdunabi',
            age:'16',
            Job:'Programmer',
            loading:true,
            work:'yes'
        };

    }

    // getInfo=()=>{
    //     this.setState({name:'Shoxbaxt',age:'15',Job:"Ment stack Devoloper"} );
    // };

componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(() => this.setState({work:'no',name:'Shoxbaxt',age:'15',Job:"Ment stack Devoloper", loading:false }))
    // this.getInfo();
}
componentDidUpdate(){
    console.log('componentDidUpdate');
}
render(){
    console.log('reder');
    return(
        <div className="card">
          
            { this.state.loading ?
            <div className="load"> <div class="loadingio-spinner-spinner-pw6f8ijzlms"><div class="ldio-g3mkk0mj3o9">
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div></div> </div>: 
            <ul className="list">  
              <li>{this.state.name}</li> 
              <li>{this.state.age}</li> 
              <li>{this.state.Job}</li> 
              </ul>
            }
        
        </div>
    )
}
}