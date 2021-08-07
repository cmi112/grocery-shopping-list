import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { Card,Button, Container,Row,Col} from 'react-bootstrap';
import "../styles/items.css"

function Grocerylist() {
  const [item,setItem]=useState([])
  const getItem=()=>{
  axios.get("http://localhost:5000/items")
  .then(response=>{
    console.log(response);
    const myItem=response.data;
    setItem(myItem)
  })
}
useEffect(()=>getItem(),[])
 
  return (<>
    <h1>Grocery Items</h1>
    <Container>
      {item.map((items)=>(
        <Row
        style={{ margin: '1.8rem' }}>
        <Card style={{ width: '18rem' }}>
          <Col >
        <Card.Img variant="top" src={items.image} />
        <Card.Body>
          <Card.Title>{items.name}</Card.Title>
          <Card.Text>
         Price : $ {items.price}
          </Card.Text>
          <Card.Text>
          {items.description}
          </Card.Text>
          <Button variant="primary" style={{ margin: '1.4rem' }}>Edit</Button>
          {/* <Button variant="primary"></Button> */}
          <Button variant="danger">Delete</Button>
        </Card.Body>
        </Col>
      </Card>
      </Row>
        
        ))}
        </Container>
  </>  
  )
}

export default Grocerylist

