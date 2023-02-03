import React from 'react';
import { Link ,Outlet} from 'react-router-dom';

    
    export default function LayOut(){
            return (
                <>
                <header className="App-header">
                <Link to="/">Home</Link>
                <Link to="/posts">Blog</Link>
                <Link to="/about">About</Link>
              </header>

              <main className="container">
                <Outlet/>
              </main>
              <footer className="container">Router 2023</footer>
              
              </>
        );
}