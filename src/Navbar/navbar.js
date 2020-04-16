import React, { useState,useEffect } from 'react';

import { Navbar, Nav, Dropdown, ToggleButtonRadioProps, NavDropdown } from "react-bootstrap"
import "./Navbar.css"
const NNavbar=()=>{
	const [state, setstate] = useState({scrollpass:false});

 useEffect(() => {
  window.addEventListener("scroll", headerColorChange);
 
 }, [1])

const headerColorChange=async()=>{
if(window.pageYOffset>500){
 setstate({scrollpass:true})

}
else if(window.pageYOffset<500){
	setstate({scrollpass:false})

}
}

const ispass=state.scrollpass;	
console.log(ispass)
		return (
			<Navbar  expand="lg" className={"boyut white navbar-position "+ (ispass ? "ispass": "trans")} fixed="top">
				<div  className={"menuitem "+(ispass ? "black": "white")}><Navbar.Brand href="#home" >ÜNYE LOGO</Navbar.Brand></div>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav" className="navbarmargin">
					<Nav className="mr-auto" className={"nav-12 "+(ispass ? "black": "white")}>
					
						<NavDropdown title="drop"  id="basic-nav-dropdown-white " className={"menuitem "+(ispass ? "black": "white")}>
						
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown>
						<div className={"menuitem "+(ispass ? "black": "white")}><Nav.Link href="#renkcontainer2" >Home</Nav.Link></div>
						<div className={"menuitem "+(ispass ? "black": "white")}><Nav.Link href="#home" >Link</Nav.Link></div>
				

					</Nav>

				</Navbar.Collapse>
			</Navbar>
		);
	}


export default NNavbar;
