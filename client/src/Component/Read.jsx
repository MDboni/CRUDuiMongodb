import { useEffect, useState } from "react"
import CoffeeCard from "./CoffeeCard"

const Read = () => {

    const [user,setUser] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5400/users',{
            method:"GET"
        })
        .then( res => res.json())
        .then(data => {
            setUser(data);
        })
    },[])
  return (
    <div className="w-9/12 mx-auto">
        <h2>{user.length}</h2>
        <div className="grid md:grid-cols-2 gap-4">
            {
            user.map(item =>(
                <CoffeeCard key={item._id} user={item}></CoffeeCard>
            ))
         } 
        </div>
    </div>
  )
}

export default Read