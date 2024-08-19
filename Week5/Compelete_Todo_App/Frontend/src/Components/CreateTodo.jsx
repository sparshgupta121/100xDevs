export function CreateTodo(){
    return<div>
        <input style={{
            margin:"10px",
            padding:"10px"
        }} type="text" placeholder="Title" /> <br/><br/>
        <input style={{
            margin:"10px",
            padding:"10px"
        }} type="text" placeholder="Description"/><br/><br/>
        <button style={{
            margin:"10px",
            padding:"10px"
        }} >Add Todo</button><br/>

    </div>
}