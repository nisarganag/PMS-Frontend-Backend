function ListGroup() {
  const List = ["india", "china", "japan", "mexico"];
  return (
    <>
      <h3>List</h3>
      <ul className="list-group">
        {List.map((item,index) => (
          <li className="list-roup-item" key={item} onClick={()=>console.log(item,index)}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
