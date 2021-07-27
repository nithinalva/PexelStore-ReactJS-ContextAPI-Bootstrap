import React from 'react'
import {SiReact} from'react-icons/si'
import {Navbar, NavbarBrand, NavItem, NavLink,Nav,Button, NavbarText, Container} from 'reactstrap'
import {GoMarkGithub} from 'react-icons/go'
import {IoLogoNpm} from 'react-icons/io'
import {RiNpmjsLine}  from 'react-icons/ri'

const NavbarC = () => {
    return (
        <div>
           
                <Navbar className="navbar" expand="md">
                <NavbarBrand>
                    <h1 style={{color:"#fff",padding:"2px"}} className="ml-2"><span><SiReact/></span>React-PexelStore</h1>
                </NavbarBrand>
                
            <Nav className="" navbar>
                <NavItem>
                <Button className="my-button btn btn-outline-light m-2 ">Pexels.com</Button>
                </NavItem>
                <NavItem>
                <Button className="my-button btn btn-outline-light m-2"><RiNpmjsLine/> Faker.js</Button>
                </NavItem>
                <NavItem>
                   
                   <Button className="my-button btn btn-outline-light m-2"><GoMarkGithub/> source-code</Button>
                </NavItem>
               
            
                  
             
          

            </Nav>
            
            <Nav className="left-nav p-2">
                <Button className="my-button">
                      Developed By Nithin Alva
                </Button>
            </Nav>
              

            
                </Navbar>

             
                
        </div>
    )
}

export default NavbarC
