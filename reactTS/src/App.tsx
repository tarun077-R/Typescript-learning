import { Card } from './components/Card'
import { ChaiCard } from './components/ChaiCard'
import { ChaiList } from './components/ChaiList'
import { Counter } from './components/Counter'
import { OrderForm } from './components/OrderForm'
import type {Chai} from "./types"

const App = () => {
  const menu:Chai[] = [
    {
      id:1,name:"Masala",price:30
    },
    {
      id:1,name:"Ginger",price:50
    },
    {
      id:1,name:"Lemon",price:60
    },
  ]
  return (
    <>
    <div>
      <h1>Hello!!!!</h1>
      <ChaiCard name="Headphones" price={5000}/>
      <ChaiCard name="iPhone" price={350000}/>
      </div>
      <div>
        <Counter/>
      </div>
      <div>
        <ChaiList items={menu}/>
      </div>
    <div>
      <OrderForm onSubmit={(order)=>{
        console.log("Placed",order.name,order.cups)
      }}/>
      </div>
      <div>
        <Card title="chai with tarun" footer={<button>Order Now</button>}/>
      </div>
    </>
  )
}

export default App