import styles from '../../styles/Home.module.css'
import Navbar from "../navbar";
import Head from "next/head";

export default function wordInSentenceCounter() {
    return (
        <>
            <Head>
                <title>Word in a Sentence Counter</title>
            </Head>
            <div className={styles.background}/>
            <main className={styles.main}>
                <Navbar/>
                <div className={styles.project_overview_section}>
                    <div className={styles.overview}>
                        <h1>
                            Word in a Sentence Counter
                        </h1>
                        <h3>
                            C#
                        </h3>
                        <p>
                            Word in Sentence Counter is a C# application that counts the number of words in a sentence.
                        </p>
                        <a href="https://github.com/PuckyEU/word-in-sentence-counter">Source Code</a>
                    </div>
                </div>
            </main>
        </>
    )
}