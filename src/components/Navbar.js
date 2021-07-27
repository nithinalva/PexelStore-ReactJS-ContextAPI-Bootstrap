import React from 'react'
import {SiReact} from'react-icons/si'
import {Navbar, NavbarBrand, NavItem, NavLink,Nav,Button, NavbarText, Container} from 'reactstrap'
import {GoMarkGithub} from 'react-icons/go'
import {IoLogoNpm} from 'react-icons/io'
import {RiNpmjsLine}  from 'react-icons/ri'
import { BrowserRouter as Router,Link } from 'react-router-dom'

const NavbarC = () => {
    return (
        <div>
           
                <Navbar className="navbar" expand="md">
                    <Router>
                <NavbarBrand>
                    <h1 style={{color:"#fff",padding:"2px"}} className="ml-2"><span><SiReact/></span>React-PexelStore</h1>
                </NavbarBrand>
                
            <Nav className="" navbar>
                <NavItem>
                <Button className="my-button btn btn-outline-light m-2 "><Link to={{pathname:"https://www.pexels.com/"}} target="_blank"> Pexels.com</Link></Button>
                </NavItem>
                <NavItem>
                <Button className="my-button btn btn-outline-light m-2"><RiNpmjsLine/><Link to={{pathname:"https://www.npmjs.com/package/faker"}} target="_blank"> Faker.js</Link> </Button>
                </NavItem>
                <NavItem>
                   
                   <Button className="my-button btn btn-outline-light m-2"><GoMarkGithub/><Link to={{pathname:"https://github.com/nithinalva/ThePexelStore-ReactJS-ContextAPI-Bootstrap"}} target="_blank"> source-code</Link> </Button>
                </NavItem>
               
            
                  
             
          

            </Nav>
            
            <Nav className="left-nav p-2">
                <Button className="my-button  "><Link to={{pathname: "https://nithin-alva.netlify.app/"}} target="_blank"  >
                      Developed By Nithin Alva
                       </Link>
                </Button>
            </Nav>
              

            </Router>
                </Navbar>

             
                
        </div>
    )
}

export default NavbarC
