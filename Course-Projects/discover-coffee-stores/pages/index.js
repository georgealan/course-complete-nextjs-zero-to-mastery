/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner'
import Card from '../components/card'

import styles from '../styles/Home.module.css'

import coffeeStores from "../data/coffee-stores.json";

export default function Home() {

  const handleOnBannerBtnClick = () =>{
    console.log("Hi hello!");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner buttonText="View stores nearby" handleOnClick={handleOnBannerBtnClick} />

        <div className={styles.heroImage}>
          <Image src="/static/hero-image.png" width={500} height={375}/>;
        </div>

        <div className={styles.cardLayout}>
          {coffeeStores.map((coffeeStore) => {
            return (
              <Card 
                name={coffeeStore.name}
                imgUrl={coffeeStore.imgUrl}
                href={`/coffee-store/${coffeeStore.id}`}
              />    
            );
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
