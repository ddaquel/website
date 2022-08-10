import type { NextPage } from 'next'
import styles from './Home.module.css'

import { Stack } from '@mui/material'
import { useState } from 'react'
import { BRAND, EXPERIENCE, HOME, SOCIALS } from 'src/constants/pageNames'
import Layout from 'src/shared/Layout'
import Brand from './components/Brand'
import Experience from './components/Experience'
import Socials from './components/Socials'
import Image from 'next/image';

const Home: NextPage = () => {

  const [page, setPage] = useState(HOME)

  const switchPage = (newValue: number) => {
    switch (newValue) {
      case 3:
        setPage(SOCIALS)
        break;
      case 2:
        setPage(BRAND)
        break;
      case 1:
        setPage(EXPERIENCE)
        break;
      case 0:
      default:
        setPage(HOME)
    }
  }

  return (
    <Layout page={page} switchPage={switchPage}>
      { page === HOME &&
        <Stack spacing={3} justifyContent="center" alignItems="center" height="100%" textAlign="center">
          <h1 className={styles.title}> WELCOME TO MY PERSONAL WEBSITE </h1>
          <p> I am 
            <span className="bold-blue"> 23 years old </span>  
            and my current role is a 
            <span className="bold-pink"> Junior Software Engineer </span>
            at:
          </p>
          <br/>
          <Image src="/assets/home/work-logo.png"  height="60px" width="170px" style={{ paddingTop: '5px'}} alt="Logo of where I currently work"/> 
          <p> This website will serve as my <span className="bold-pink"> Online Portfolio. </span> </p>
          {/* <p> Use the bottom navigation bar 👇 for more info about me.  </p>  */}
        </Stack>
      }
      { page === EXPERIENCE && <Experience/> }
      { page === BRAND && <Brand/> }
      { page === SOCIALS && <Socials/> }
    </Layout>
  )
}
export default Home
