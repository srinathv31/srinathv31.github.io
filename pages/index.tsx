import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Srinath Venkatesh</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
           
            <main className={styles.main}>
                <div>
                    <h1>
                        {"Hi, my name is "}<div className={styles.nameHeader}>Srinath Venkatesh</div>
                    </h1>
                    <p>Welcome to my website.</p>
                    <p>I like Developing and Creating new things.</p>
                    <p>
                        {"Click here to view this website's "}<span className={styles.nameHeader}>
                            <a href="https://github.com/srinathv31/srinath-website" target={"_blank"} rel="noreferrer">source code</a>
                        </span>
                    </p>
                </div>
            </main>

            
        </div>
    );
};

export default Home;
