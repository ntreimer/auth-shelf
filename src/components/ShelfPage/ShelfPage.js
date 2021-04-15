import React from 'react';
import ItemList from '../ItemList/ItemList'
import axios from 'axios'

const getItems = () =>{
  axios.get('/api/shelf').then((response) => {
    console.log(response)
  }).catch((err) => {
    console.log(err)
  })
}


function ShelfPage() {
  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <button onClick={() => {getItems()}}>Click</button>
    </div>
  );
}

export default ShelfPage;
