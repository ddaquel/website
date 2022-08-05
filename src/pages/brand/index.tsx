import { Button, Stack } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { BRAND } from 'src/constants/pageNames'
import { Layout } from 'src/layout'
import styles from './Brand.module.css'
import LanguageIcon from '@mui/icons-material/Language';

const Brand: NextPage = () => {
  return (
    <Layout page={BRAND}>
      <Stack alignItems="center" justifyContent="center" height="100%" textAlign="center">
        <h1 className={styles.title}> Personal Brand </h1>
        <Stack direction="row" justifyContent="center">
          <img src="/assets/brand/DRKDQL.svg" height="50px"/>
        </Stack>
        <br/>
        <Stack spacing={2}>
          <p > During June of 2022, I created a personal brand to attach to any project and content I create online. With most of my current experience as a Software Engineer being in frontend web development, I am interested in working on fun and hands-on projects in a wide range of areas. I will be taking an unstructured, agile approach to my project development where I will quickly develop plans but will learn mostly from pushing out content or code as quick as I can and will adapt to new goals and mistakes.</p>
          <p> These projects will range from: 
            <span className="bold-blue"> Web / mobile applications </span>,
            <span className="bold-pink"> Games </span>,
            <span className="bold-blue"> User Interface Designs </span>,
            <span className="bold-pink"> Photo / video editing for social media </span>
            ... and more!
          </p>
          <br/>
        </Stack>
        <Button variant="contained" className={styles.brandLink} href="https://drkdql.com">
          <Stack direction="row" alignItems="center" spacing={1}>
            <LanguageIcon/> 
            <h3> DRKDQL.com </h3>
          </Stack>
        </Button>
      </Stack>
    </Layout>
  )
}

export default Brand
