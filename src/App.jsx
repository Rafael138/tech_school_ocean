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

  const itens=[item1,item2,item1,item2,item1,item2,item1,item2,item1,item2]
  return (
    <>
     {itens.map(function (item){
      return <Card item={item}/>
     })}
    </>
  )
}

export default App
