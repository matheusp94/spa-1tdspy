import { useParams } from "react-router-dom"

export default function EditarProdutos() {

  
  const {id} = useParams();
  document.title = id;


  return (
    <div>
      <h1>Editar Produtos</h1>
      <h2>Produto Selecionado - {id}</h2>
    </div>
  )
}
