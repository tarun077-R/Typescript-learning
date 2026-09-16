import { useState } from "react";

interface OrderFormProps{
    onSubmit(order:{name:string;cups:number}):void
}

export function OrderForm({onSubmit}:OrderFormProps){
    const [name,setname] = useState<string>("Masala")
    const [cups,setcups] = useState<number>(4);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  onSubmit({name,cups});
}
    return(
      <form onSubmit={handleSubmit}>
        <label>Chai Name</label>
        <input value={name} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>
            setname(e.target.value)
        }/>
        <label>Cups</label>
        <input type="number" value={cups} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>
            setcups(Number(e.target.value)|| 0)
        }/>
        <button type="submit">Submit</button>
      </form>
    )
}