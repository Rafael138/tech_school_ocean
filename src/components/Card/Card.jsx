import "./Card.css"

export default function Card(props) {
    console.log(props)
    const item= props.item;
    return  <div className="card">
    <h2>{item.nome}</h2>
    <div className='tags'>
    <div className='tag'>Status:Vivo</div>
    <div className='tag'>Espécie:Humano</div>
    </div>
    <img src={item.imagemUrl} />
  </div>
}