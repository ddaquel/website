import { Stack } from '@mui/material'
import type { NextPage } from 'next'
import { HOME } from 'src/constants/pageNames'
import { Layout } from 'src/layout'
import styles from './Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout page={HOME}>
      <Stack spacing={3} justifyContent="center" alignItems="center" height="100%" textAlign="center">
        <h1 className={styles.title}> Welcome to my personal website!</h1>
        <p> I am <span className="bold-blue"> 23 years old </span> and currently work as a <span className="bold-pink"> Junior Software Engineer </span> at: </p>
        <img className={styles.workLogo} src="/assets/home/work-logo.png" height="50px"/>
        <p> This website will serve as my <span className="bold-pink"> Online Portfolio </span>. </p>
        <p> Use the bottom navigation bar 👇 for more info about me.  </p> 
      </Stack>
      
    </Layout>
  )
}
export default Home
