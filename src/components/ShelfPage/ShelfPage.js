import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import axios from "axios";
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux'
import AddShelfItem from "../AddShelfItem/AddShelfItem";

function ShelfPage() {
  // const [shelfItems, setShelfItems] = useState([]);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch({type: 'FETCH_ITEMS'});
  }, []);

  const shelfItems = useSelector((store) => {
    return store.item
  })
  const user = useSelector((store) => store.user);
  // const getItems = () => {
  //   axios
  //     .get("/api/shelf")
  //     .then((response) => {
  //       console.log(response.data);
  //       setShelfItems(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  
    if (user.id != null) {
      return (
        <div className="container">
          <AddShelfItem />
          <h2>Shelf</h2>
          <p>All of the available items can be seen here.</p>
          <ItemList shelfItems={shelfItems} />
      </div>
      )
    }
    else {
      return (
        <div className="container">
          <h2>Shelf</h2>
          <p>All of the available items can be seen here.</p>
          <ItemList shelfItems={shelfItems} />
        </div>
      )
    }
}

export default ShelfPage;
