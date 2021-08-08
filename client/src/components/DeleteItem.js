// import React,{useEffect,useState} from 'react'
// import {Card,Button,Col} from "react-bootstrap"
// import "../styles/items.css"
 



// export default function Grocerylist() {
//   const [item,setItems]=useState([])
//   useEffect(()=>{
//     fetch("http://localhost:5000/items").then(res=>res.json()).then(result=>{
//       if(result.success){
//         setItems(result.data)
//       }else{
//         console.log(result.message);
//       }
//     })
//   },[])
  
  
  
//   return (
//     <div className="product-list">
//       <h1 className="title">Grocery List</h1>
//       {item.map(it=>{
//         return(
//           <Card style={{ width: '18rem',margin:"2rem"}} key={it._id}>
//           <Col >
//         <Card.Img variant="top" src={it.image} />
//         <Card.Body>
//           <Card.Title>{it.name}</Card.Title>
//           <Card.Text>
//          Price : $ {it.price}
//           </Card.Text>
//           <Card.Text>
//           {it.description}
//           </Card.Text>
//           <Button variant="primary" style={{ margin: '1.4rem' }}>Edit</Button>
//           {/* <Button variant="primary"></Button> */}
//           <Button variant="danger" onClick={()=>deleteOpration(it._id)}>Delete</Button>
          
//         </Card.Body>
//         </Col>
//       </Card>
          

//         )
//       })}
      
//     </div>
//   )
// }
