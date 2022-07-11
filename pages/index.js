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
                        <div className={styles.setas}></div>
                        <div className={styles.mes}>julho</div>
                        <div className={styles.setas}></div>
                    </div>

                    <div className={styles.calendarioDias}></div>
                </div>

                <div className={styles.tarefas}>TAREFAS</div>
            </main>
        </div>
    )
}
