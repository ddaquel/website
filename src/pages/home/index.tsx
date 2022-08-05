import { Grid, Stack } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { HOME } from 'src/constants/pageNames'
import { Layout } from 'src/layout'
import styles from './Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout page={HOME}>
      <Stack spacing={3} justifyContent="center" alignItems="center" height="100%">
        <h1 className={styles.title}> Welcome to my personal website!</h1>
        <Stack direction="row" alignItems="center" spacing={1}> 
          <p> I am <span className="bold-blue"> 23 years old </span>  and currently work as a <span className="bold-pink"> Junior Software Engineer </span> at </p>
          <img src="/assets/home/work-logo.png" height="30px"/>
          <p>.</p>
        </Stack>
        <p> This website will serve as my <span className="bold-pink"> Online Portfolio </span>. </p>
        <p> Use the bottom navigation bar 👇 for more info about me.  </p> 
      </Stack>
      
    </Layout>
  )
}
export default Home
