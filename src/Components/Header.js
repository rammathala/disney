import React from 'react'
import { useEffect } from "react";
import loo from '../logo.svg'
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import StarIcon from '@mui/icons-material/Star';
import './Header.css'
import HomeIcon from '@mui/icons-material/Home';
import { auth, provider } from '../firebase'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LiveTvIcon from '@mui/icons-material/LiveTv';
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from '../Userslice';
export default function Header() {
   const dispatch = useDispatch();
  const Navigateto = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        Navigateto("/home");
      }
    });
  }, [userName]);
  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          Navigateto("/");
        })
        .catch((err) => alert(err.message));
    }
  };
    const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };
  return (
      <div className='Header'>
      <img className='logo' src={loo} />
      {!userName ? (<button onClick={handleAuth} className='but'>Login</button>) : (
        <>
        <div className='menu'>
        <a href='/home'
          className='H'>
                <HomeIcon className='home' />
                <p className='p'>Home</p>  
              </a>
               <a className='H'>
                <SearchIcon className='home' />
                <p className='p'>Search</p>  
              </a>
               <a className='H'>
                <AddIcon className='home' />
                <p className='p'>Watchlist</p>  
        </a>
        <a className='H'>
                <StarIcon className='home' />
                <p className='p'>Originals</p>  
              </a>
        <a className='H'>
                <LocalMoviesIcon className='home' />
                <p className='p'>Movies</p>  
              </a>
               <a className='H'>
                <LiveTvIcon className='home' />
                <p className='p'>Series</p>  
        </a>
          </div>
          <div className='use'>
            <img  className='userphoto' src={userPhoto} alt='user' />
            <p onClick={handleAuth} className='signout'>signOut</p>
            </div>
          
        </>
      )}
        
     
    </div>
  )
}
