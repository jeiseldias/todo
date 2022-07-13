import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>TODO - jeisel.dev</title>
                <meta name="description" content="Meu app TODO" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div className={styles.calendario}>
                    <div className={styles.calendarioTopo}>
                        <div className={styles.setas}>e</div>
                        <div className={styles.calendarioCabecalho}>
                            <div className={styles.ano}>2022</div>
                            <div className={styles.mes}>Julho</div>
                        </div>
                        <div className={styles.setas}>d</div>
                    </div>

                    <div className={styles.calendarioDias}></div>
                </div>

                <div className={styles.tarefas}>
                    <div className={styles.tarefasCabecalho}>
                        <div className={styles.tarefasDia}>
                            <div className={styles.data}>18</div>
                            <div className={styles.semana}>Quarta-Feira</div>
                        </div>

                        <div className={styles.tarefasMenu}>
                            <div className={styles.menuTexto}>Adicionar <br />nova tarefa</div>
                            <div className={styles.menuIcone}>+</div>
                        </div>
                    </div>

                    <div className={styles.tarefasLista}>
                        <div className={styles.listItem}>
                            <div className={styles.hora}>
                                <p>12:00</p>
                            </div>

                            <div className={styles.infos}>
                                <h2>Feira</h2>
                                <span>Praça da igreja</span>
                                <p>Comprar legumes, frutas, ovos e frios</p>
                            </div>

                            <div className={styles.lixo}><p>Lixeira</p></div>
                        </div>

                        <div className={styles.listItem}>
                            <div className={styles.hora}>
                                <p>12:00</p>
                            </div>

                            <div className={styles.infos}>
                                <h2>Feira</h2>
                                <span>Praça da igreja</span>
                                <p>Comprar legumes, frutas, ovos e frios</p>
                            </div>

                            <div className={styles.lixo}><p>Lixeira</p></div>
                        </div>

                        <div className={styles.listItem}>
                            <div className={styles.hora}>
                                <p>12:00</p>
                            </div>

                            <div className={styles.infos}>
                                <h2>Feira</h2>
                                <span>Praça da igreja</span>
                                <p>Comprar legumes, frutas, ovos e frios</p>
                            </div>

                            <div className={styles.lixo}><p>Lixeira</p></div>
                        </div>

                        <div className={styles.listItem}>
                            <div className={styles.hora}>
                                <p>12:00</p>
                            </div>

                            <div className={styles.infos}>
                                <h2>Feira</h2>
                                <span>Praça da igreja</span>
                                <p>Comprar legumes, frutas, ovos e frios</p>
                            </div>

                            <div className={styles.lixo}><p>Lixeira</p></div>
                        </div>

                        <div className={styles.listItem}>
                            <div className={styles.hora}>
                                <p>12:00</p>
                            </div>

                            <div className={styles.infos}>
                                <h2>Feira</h2>
                                <span>Praça da igreja</span>
                                <p>Comprar legumes, frutas, ovos e frios</p>
                            </div>

                            <div className={styles.lixo}><p>Lixeira</p></div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
