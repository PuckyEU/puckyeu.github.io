import styles from '../../styles/Home.module.css'
import Navbar from "../navbar";

export default function Repeaty() {
    return (
        <>
            <main className={styles.main}>
                <Navbar/>
                <div className={styles.center}>
                    <div className={styles.centerText}>
                        <h1>
                            Repeaty
                        </h1>
                        <p>
                            Repeaty is an android application to Track and Manage your Habits.
                        </p>
                        <p>
                            The application is built using Java and Firebase.
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}