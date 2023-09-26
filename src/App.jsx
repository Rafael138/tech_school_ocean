import './App.css'
import Card from './components/Card/Card'

function App() {
  const item1={
    nome:'Rafael',
    imagemUrl:'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
  }
  const item2={
    nome:'teste',
    imagemUrl:'https://rickandmortyapi.com/api/character/avatar/4.jpeg'
  }

  const itens=[item1,item2]
  return (
    <>
    <Card item={item1} />
    <Card item={item2}/>
   
    </>
  )
}

export default App
