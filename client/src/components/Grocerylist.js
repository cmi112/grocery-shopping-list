import React,{useEffect,useState} from 'react'
import {Card,Button,Col} from "react-bootstrap"
import "../styles/items.css"
import baseURL from "../config/baseURL"
 



export default function Grocerylist() {
  const [item,setItems]=useState([])
  useEffect(()=>{
    fetch(baseURL).then(res=>res.json()).then(result=>{
      if(result.success){
        setItems(result.data)
      }else{
        console.log(result.message);
      }
    })
  },[])
 async function deleteItem(_id){
    // alert(_id)
    let result= await fetch(baseURL+"/"+_id,{
      method:"DELETE"
    })
    result= await result.json()
    console.warn(result)
    window.location.replace("/grocerylist")

  }
  async function editItem(_id){
    // alert(_id)
    let update= await fetch(baseURL+"/"+_id,{
      method:"PATCH"
    })
    update= await update.json()
    console.warn(update)
    window.location.replace("/edit")

  }
  return (
    <div className="product-list">
      <h1 className="title">Grocery List</h1>
      {item.map(it=>{
        return(
          <Card style={{ width: '18rem',margin:"2rem"}} key={it._id}>
          <Col >
        <Card.Img variant="top" src={it.image} />
        <Card.Body>
          <Card.Title>{it.name}</Card.Title>
          <Card.Text>
         Price : $ {it.price}
          </Card.Text>
          <Card.Text>
          {it.description}
          </Card.Text>
          <Button variant="primary" style={{ margin: '1.4rem' }} onClick={()=>editItem(it._id)}>Edit</Button>
          {/* <Button variant="primary"></Button> */}
          <Button variant="danger" onClick={()=>deleteItem(it._id)}>Delete</Button>
          
        </Card.Body>
        </Col>
      </Card>
          

        )
      })}
      
    </div>
  )
}
