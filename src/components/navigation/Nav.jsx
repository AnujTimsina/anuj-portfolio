import "./nav.css"
import React, { useState, useEffect } from 'react';




const Nav = () => {

    const [show, setShow] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
     if (typeof window !== 'undefined') { 
        
        if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
          setShow(false); 
            } 
        else if(window.scrollY==0 ){
            
            setShow(false);

        }
        else { // if scroll up show the navbar
            setShow(true);  
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
      
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

    return (
        <div  className={`active ${show && 'hidden'}`}>
                <a href="#home">HOME</a>
                <a href="#about">ABOUT</a>
                <a href="#contact">CONTACT</a> 
        </div>
    )
}

export default Nav;