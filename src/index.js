import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './styles.css';
//import App from "./App";

function App(props) {
  const fullname = props.firstname + ''+ props.lastname;
  return (
    <div> 
      <Avatar
       name="Jack Dreamer" 
       tagline="I build and design"
        />
        <WorkExperience> 
          <Company name="Microsoft"/> 
          <Company/> 
          </WorkExperience>
        <Portfolio image="https://picsum.photos/id/237/200/300"/>
        <Portfolio image=""/>
         <Portfolio image=""/>
         <Portfolio image=""/>
     
      
      </div>
  );
}

function WorkExperience(props){
  return 
  <div>
    {props.children}
    </div>

};

function Company(props){
  return (
    <li>
    <h2> 
      <span ClasssName="company"> {props.name} </span>
      <span ClasssName="from"> {props.from_date} </span>
       <span ClasssName="until"> {props.tp_date} </span>
      </h2>
    </li>
  )
}

function Portfolio(props){
return (
<div>
  <h2> Portfolio </h2>
  <div>{props.children}</div> 
  </div>
) 


}

function Project(){
  return (
    <div>
      <div className="project-image"></div>
    </div>
  )
  }

function Avatar(props){
  return (
    <div className="profile-container">
      <div className="profile_img">
        <img src="https://fastly.picsum.photos/id/586/200/300.jpg?hmac=Ugf94OPRVzdbHxLu5sunf4PTa53u3gDVzdsh5jFCwQE"/>
        </div>
        <div>
          <p className="profile">Hello I am {props.name}</p> 
          <p className="profile-tagline"> {props.tagline}</p> 
          </div>
      </div> 
  )
}


function Search() {
  return (
    <div>
    <input type="text" placeholder="search..."/>
    <button> Search </button>  
    </div> 
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App firstname="Jane" lastname="Doe" />
     </StrictMode>
);
