import React,{useState} from 'react'
import Todos from './Todos'
const App=()=>{
  const [data,setData]=useState(
    {
      name:'neo',
      age:'24'
    }
  );
  const [myname,setName]=useState('')
  const {name,age}=data;
  const changeHandler=e=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const submitHandler=e=>{
    e.preventDefault();
    console.log(data);
    if(data.password.length <5){
      alert("password length less than 5 characters");
    }
  }

  return(
    <div>
    <center>
      <h1>Name : {name} age:{age}</h1>
      <Todos name={name}/>
      Name : {myname}<br/>
      <input type="text" name="myname" onChange={(e)=>setName(e.target.value)}/>
      <form onSubmit={submitHandler}>
      <label>E-mail</label>
      <input type="text" name="name" onChange={changeHandler}/><br/>
      <label>Password</label>
      <input type="password" name="age" onChange={changeHandler}/><br/>
      <input type="submit" value="login"/>
      </form>
    </center>
    </div>
  )
}
export default App;
