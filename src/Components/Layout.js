import React from 'react';
import { NavLink ,Outlet} from 'react-router-dom';
    export default function LayOut(){
            return (
                <>
                <header className="App-header">
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/posts" >Blog</NavLink>
                <NavLink to="/about" >About</NavLink>
              </header>

              <main className="container">
                <Outlet/>
              </main>
              <footer className="container">Router 2023</footer>
              
              </>
        );
}