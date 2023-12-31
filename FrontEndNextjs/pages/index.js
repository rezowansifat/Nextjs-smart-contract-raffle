import Head from "next/head"
import styles from "../styles/Home.module.css"
import Header from "../components/Header"
import LotteryEntrance from "../components/LotteryEntrance"
import { useMoralis } from "react-moralis"
import styled from "styled-components"
import Footer from "../components/Footer"

const supportedChains = ["31337", "11155111"]

export default function Home() {
    const { isWeb3Enabled, chainId } = useMoralis()

    return (
        <>
            <Header />
            <div className={styles.container}>
                <Head>
                    <title>Enter Raffle</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                {isWeb3Enabled ? (
                    <div>
                        {supportedChains.includes(parseInt(chainId).toString()) ? (
                            <div className="flex flex-row">
                                <LotteryEntrance className="p-8" />
                            </div>
                        ) : (
                            <Connect>
                                <h1 className="py-4 px-4 font-bold text-3xl">Ethereum Lottery</h1>
                                <h3>{`Please switch to a supported chainId. supported Chain Id's are ${supportedChains}`}</h3>
                            </Connect>
                        )}
                    </div>
                ) : (
                    <Connect>
                        <h1 className="py-4 px-4 font-bold text-3xl">Ethereum Lottery</h1>
                        <h3>Please Connect to a Wallet to Participate</h3>
                    </Connect>
                )}
            </div>
            <Footer />
        </>
    )
}

const Connect = styled.div`
    padding: 0.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 400px;
    background-color: rgb(34, 34, 34);
    backdrop-filter: blur(10px);
    color: #ffffff;
    border-radius: 4px;
    border-bottom: 1px solid rgb(239, 75, 37);
    box-shadow: rgba(34, 34, 34, 0.3) 0px 19px 38px, rgba(34, 34, 34, 0.22) 0px 25px 25px;

    h1 {
        color: #ffffff;
    }

    h3 {
        width: 100%;
        font-size: 13px;
        font-weight: 400;
        padding: 0px 2px;
        margin-bottom: 25px;
        text-align: center;

        br {
            margin-bottom: 15px;
        }
    }
`
