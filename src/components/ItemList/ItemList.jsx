import ShelfItem from '../ShelfItem/ShelfItem'
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios'

function ItemList (props) {

const dispatch = useDispatch()

const user = useSelector((store) => store.user);

const deleteItem=(id)=>{
    axios.delete('/api/shelf/' + id).then((response)=>{
        console.log(response);
        dispatch({type: 'FETCH_ITEMS'});
    }).catch((err)=>{
        alert(err);
        console.log(err);
    })
}

if(user.id != null){
    return(

    <>
    <table>
        <thead>
            <tr>
                <th>Description</th><th>Image</th><th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {props.shelfItems.map((item, index) => { return <tr><td>{item.description}</td><td><img src={item.image_url} width="100px" /></td><td><button onClick={() => {deleteItem(item.id)}}>X</button></td></tr>})}
        </tbody>
    </table>
    </>
    )
} else{
    return (

            <>
            <table>
                <thead>
                    <tr>
                        <th>Description</th><th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {props.shelfItems.map((item, index) => { return <tr><td>{item.description}</td><td><img src={item.image_url} width="100px" /></td></tr>})}
                </tbody>
            </table>
            </>
    )
}
}

export default ItemList