import styles from "./Cabecalho.module.css";

export default function Cabecalho(){

    return(
        <>
            <header className={styles.container}>
                <nav>
                    <ul>
                        <li><a href="#"></a>Item1</li>
                        <li><a href="#"></a>Item2</li>
                        <li><a href="#"></a>Item3</li>
                    </ul>
                </nav>
            </header>
            <h1>App</h1>
        </>
    )


}