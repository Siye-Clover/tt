import axios from "axios";

const More= ()=>{
    const h=()=>{
        axios.get("/a.php?name=梨花香&type=wy&page=1&limit=10").then((res)=>{
            console.log(res.data);
            
        } )  
    }

    return(
        <div>
            <h1 onClick={h}>More</h1>
            
        </div>
    )
}
export default More; 