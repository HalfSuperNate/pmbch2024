import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';
import Wallet from './wallet.page';
import Link from 'next/link';
import Image from 'next/image';
// import AdminComponent from './adminCtrl.page';
// import { useAccount } from 'wagmi';
// import { useIsMounted } from './useIsMounted';
// import { AdminCheck } from './readContract';

const Home: NextPage = () => {
  // const { address } = useAccount();
  // const isAdmin = AdminCheck(address);
  // const mounted = useIsMounted();
  return (
    <div className={styles.container}>
      <Head>
        <title>Prime Legends Mint</title>
        <meta name="description" content="Prime Legends NFT Mint - PMBC." />
        <link href="/icon.png" rel="icon" type="image/x-icon"/>
      </Head>

      <main className={styles.main}>

        <Wallet />
        {/* {mounted ? isAdmin && <AdminComponent /> : null} */}
        
      </main>

      <Image width={500} height={500} src="/bottomImg.png" alt="Logo" className={styles.bottomImg} />

      <footer className={styles.footer}>
        <Link href="https://opensea.io/assets/matic/0xf879054723A845ad0102e23A8210648b97C25210/" rel="noopener noreferrer" target="_blank">
          <Image width={50} height={50} src="/opensea_icon.svg" alt="OpenSea" className={styles.footerLogo} />
        </Link>
        <Link href="https://polygonscan.com/address/0xf879054723A845ad0102e23A8210648b97C25210" rel="noopener noreferrer" target="_blank">
          <Image width={50} height={50} src="/polygonscan.svg" alt="Etherscan" className={styles.footerLogo} />
        </Link>
        <Link href="https://twitter.com/" rel="noopener noreferrer" target="_blank">
          <Image width={50} height={50} src="/x_icon.svg" alt="Twitter" className={styles.footerLogo} />
        </Link>
      </footer>
    </div>
  );
};

export default Home;
