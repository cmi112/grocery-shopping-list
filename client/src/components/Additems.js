import React from 'react'
import axios from "axios"
import {Form,Button} from "react-bootstrap"


function Additems() {
  const submit=async(event)=>{
    event.preventDefault()
    const name=event.target.name.value
    const description=event.target.description.value
    const image=event.target.image.value
    const price=event.target.price.value
    const groceryData={
      name,
      description,
      image,
      price

    }
    console.log(groceryData);
    await axios.post("http://localhost:5000/items",groceryData)

    alert("Added one item")
    window.location.replace("/grocerylist")

  }
  return (<>
  <h1>Add Item</h1>
    <Form onSubmit={submit} >
    <Form.Group className="mb-3" >
      <Form.Label>Item Name</Form.Label>
      <Form.Control type="text" placeholder="Item Name" name="name" />
      
    </Form.Group>
    <Form.Group className="mb-3" >
      <Form.Label>Price</Form.Label>
      <Form.Control type="text" placeholder="Item price" name="price" />
      
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Item Image</Form.Label>
      <Form.Control type="text" placeholder="Item image" name="image"/>
      
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" rows={6} name="description"/>
  </Form.Group>
  
    <Button variant="primary" type="submit">
      Add Item
    </Button>
  </Form>
  </>
  )
}

export default Additems
