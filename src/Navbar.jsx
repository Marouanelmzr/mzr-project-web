//@ts-check

import mzr from "./assets/MZR.png";
import backround from "./assets/pjp.png";
import Searchicon from './assets/Searchicon'
import Shoppingbag from "./assets/Shoppingbag";
import Loginicon from "./assets/Loginicone";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useScrollBlock } from "./hooks/useScrollBlock";
import { IoClose } from "react-icons/io5";
import React from "react";

function Navbar() {
    
    //open and close menu
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    //open and close shop
    const [isCategories, setIsCategories] = useState(false);

    const toggleCategories = () => {
        setIsCategories(!isCategories);
    };

    const [blockScroll, allowScroll] = useScrollBlock();
    useEffect(() => {
		if (isOpen) {
			blockScroll();
		} else {
			allowScroll();
		}
	}, [isOpen, blockScroll, allowScroll]);


    return ( 
    <>
    <nav className={isOpen ? "navbar active " : "navbar "} >
        <div className="flexcenter innerwidth">
            <div className="overlap">
                <img className="backround" alt="Backround" src={backround} />
            </div>
            <div className="links">
                <ul>
                    <li>
                        <div className="fabar" onClick={toggleMenu}>
                            <FaBars />
                        </div>
                        <div className="close" onClick={toggleMenu}>
                        <IoClose/>
                        </div>
                        <a href="/search">
                            <div className="bigsize">
                                <Searchicon />
                            </div>
                        </a>
                    </li>
                    <li>
                        <div className="bigsize">
                            <a href="/">Home</a>
                        </div>
                    </li>
                    <li>
                        <div className="Showcategories">
                            <div className="bigsize">
                                <a href="/Shop" >Shop</a>
                            </div>
                            <nav className="categories">
                                
                            </nav>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="mzrlogo">
                <a href="/">
                    <img
                        className="mzr"
                        alt="MZR"
                        src={mzr} />
                </a>
            </div>
            <div className="links">
                <ul>
                    <li>
                        <a href="/login">
                            <div className="linkss">
                                <ul>
                                    <li>
                                        <Loginicon />
                                    </li>
                                    <li>
                                        <div className="textlistnav">
                                            LOG IN
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/basket">
                            <div className="linkss">
                                <ul>
                                    <li>
                                        <Shoppingbag />
                                    </li>
                                    <li>
                                        <div className="textlistnav">
                                            BASKET
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
        
        <nav className={isOpen ? "menu active" : "menu"} >
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/Shop">NEW DROP</a>
                </li>
                <li>
                    <a href="/Shop">All products</a>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar