import React from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Edit from "./Edit"
import Additems from "./Additems"
import Grocerylist from './Grocerylist';

export default function Header() {
  return (
    <>
    <Router>
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="/">Grocery</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="additem">Add Items</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <Switch>
          <Route exact path="/">
            <Grocerylist />
          </Route>
          <Route  path="/additem">
            <Additems />
          
          </Route>
          <Route path="/grocerylist">
            <Grocerylist />
          </Route>
          <Route path="/edit">
            <Edit/>
          </Route>
        
        
          
        </Switch>
  </Router>

  

</>
  )
}
