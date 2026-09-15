import { ChaiCard } from './components/ChaiCard'
import { ChaiList } from './components/ChaiList'
import { Counter } from './components/Counter'
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
    </>
  )
}

export default App