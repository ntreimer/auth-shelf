import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux'
import ItemList from '../ShelfItem/ShelfItem'
import axios from 'axios'


function AddShelfItem() {
  const dispatch = useDispatch();

const [item, setItem] = useState('')
const [url, setUrl] = useState('')

// useEffect (() => {getItems()}, [])

const addItem = () => {
    const shelfItem = {
        item: item,
        url: url
    }
    if(item === ''){
        window.alert('Must provide description')
    } else if(url === ''){
        window.alert('Must provide URL')
    } else {
        dispatch({type:'ADD_ITEM', payload: shelfItem})
    }
    
}

//   axios.get('/api/shelf').then((response) => {
//     console.log(response.data);
//     setShelfItems(response.data);
//   }).catch((err) => {
//     console.log(err);
//   })

  return (
    <div className="container">
        <h2>Add an item here</h2>
        <input placeholder="description" value={item} onChange={(event) => setItem(event.target.value)}></input>
        <input placeholder="image url" value={url} onChange={(event) => setUrl(event.target.value)}></input>
        <button onClick={addItem}>Submit</button>
    </div>
  )
}

export default AddShelfItem;