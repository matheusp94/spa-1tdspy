import Cabecalho from "./components/Cabecalho";
import Conteudo from "./components/Conteudo";
import Rodape from "./components/Rodape";

export default function App(){

    return(
        <>

            <header>
                <nav>
                    <ul>
                        <li><a href="#"></a>Item1</li>
                        <li><a href="#"></a>Item2</li>
                        <li><a href="#"></a>Item3</li>
                    </ul>
                </nav>
            </header>
            <h1>App</h1>

            <Cabecalho/>
            <Conteudo/>
            <Rodape/>

        </>
    )


}