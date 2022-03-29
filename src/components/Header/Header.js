import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import {useDispatch} from 'react-redux'
import { fetchAsyncMovies } from "../../features/movies/movieSlice";
import { fetchAsyncShows } from "../../features/movies/movieSlice";
import "./Header.scss";

const Header = () => {
  const dispatch=useDispatch()
const [term,setTerms]=useState('')
  const SubmitHandler =(e)=>{
     e.preventDefault()
     if(term==="") return alert("Please enter term")
     dispatch(fetchAsyncMovies(term))
     dispatch(fetchAsyncShows(term))
     setTerms("")
  }
  return (
    <div className="header">
   
        <div className="logo">
          <Link to="/"> 
          Movie App
        </Link>
        </div>
        <div className="search">
          <form onSubmit={SubmitHandler}>
            <input type="text"value={term} placeholder="search movie" onChange={(e)=>setTerms(e.target.value)}/>
               <button type="button"><i className="fa fa-search"></i></button>
            
          </form>
        </div>
      
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
