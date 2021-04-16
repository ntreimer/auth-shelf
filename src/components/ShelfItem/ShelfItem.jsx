
function ShelfItem (props) {
return(
    <>
        <tr><td>{props.shelfItem.description}</td><td>{props.shelfItem.image_url}</td></tr>
</>
)
}

export default ShelfItem