import React from 'react'
class Score extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            score:0,
            wickets:0,
            overs1:0,
            overs2:0
        };
      }
    handleClick1=()=>{
        this.setState({score:this.state.score+1});
        this.setState({overs2:this.state.overs2+1});
        if(this.state.overs2 > 4){
            this.setState({overs2:this.state.overs2=0});
            this.setState({overs1:this.state.overs1+1});
        }
        
    }
    handleClick2=()=>{
        this.setState({score:this.state.score+2});
        this.setState({overs2:this.state.overs2+1});
        if(this.state.overs2 > 4){
            this.setState({overs2:this.state.overs2=0});
            this.setState({overs1:this.state.overs1+1});
        }

    }
    handleClick3=()=>{
        this.setState({score:this.state.score+3});
        this.setState({overs2:this.state.overs2+1});
        if(this.state.overs2 > 4){
            this.setState({overs2:this.state.overs2=0});
            this.setState({overs1:this.state.overs1+1});
        }

    }
    handleClick4=()=>{
        this.setState({score:this.state.score+4});
        this.setState({overs2:this.state.overs2+1});
        if(this.state.overs2 > 4){
            this.setState({overs2:this.state.overs2=0});
            this.setState({overs1:this.state.overs1+1});
        }

    }
    handleClick5=()=>{
        this.setState({score:this.state.score+6});
        this.setState({overs2:this.state.overs2+1});
        if(this.state.overs2 > 4){
            this.setState({overs2:this.state.overs2=0});
            this.setState({overs1:this.state.overs1+1});
        }

    }
    handleClick6=()=>{
        this.setState({score:this.state.score+1});

    }
    handleClick7=()=>{
        this.setState({score:this.state.score+1});

    }
    handleClick8=()=>{
        this.setState({wickets:this.state.wickets+1});
        this.setState({overs2:this.state.overs2+1});
        if(this.state.overs2 > 4){
            this.setState({overs2:this.state.overs2=0});
            this.setState({overs1:this.state.overs1+1});
        }
        if(this.state.wickets == 10){
            alert("ALL OUT");
            this.setState({overs2:this.state.overs2=0});
            this.setState({overs1:this.state.overs1=0});
            this.setState({score:this.state.score=0});
        }
        
    }
    render(){
        return(
            <div>
            <h2>SCORE:{this.state.score}/{this.state.wickets}</h2>
            <h2>OVERS:{this.state.overs1}.{this.state.overs2}</h2>
            <button onClick={this.handleClick1}>Single</button>
            <button onClick={this.handleClick2}>Two</button>
            <button onClick={this.handleClick3}>Three</button>
            <button onClick={this.handleClick4}>Four</button>
            <button onClick={this.handleClick5}>Six</button><br/>
            <button onClick={this.handleClick6}>Wide</button>
            <button onClick={this.handleClick7}>No ball</button>
            <button onClick={this.handleClick8}>Out</button>
            </div>
        )
    }
}
export default Score;