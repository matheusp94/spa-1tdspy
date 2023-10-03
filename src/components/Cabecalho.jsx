import { Link } from "react-router-dom";
import styles from "./Cabecalho.module.css";

export default function Cabecalho() {
  return (
    <>
        
     <header className={styles.container}>
        <nav>
            <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/produtos">Produtos</Link> </li>
                <li> <Link to="/editar/produtos/1">Produto - 1</Link> </li>
                <li> <Link to="/editar/produtos/2">Produto - 2</Link> </li>
            </ul>
        </nav>
     </header>

    </>
  )
}
