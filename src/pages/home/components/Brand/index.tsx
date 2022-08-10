import * as React from 'react';
import styles from './Brand.module.css'

import { Stack } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language';
import Fade from 'src/shared/Fade';
import Image from 'next/image';
import Button from 'src/shared/Button';

export interface IBrandProps { }

function Brand (props: IBrandProps ) {
  return (
    <Fade>
      <Stack alignItems="center" justifyContent="center" height="100%" textAlign="center">
        <h1 className={styles.title}> PERSONAL BRAND  </h1>
        <Stack direction="row" justifyContent="center">
          <Image src="/assets/brand/DRKDQL.svg"  height="50px" width="300px" alt="DRKDQL brand logo"/>
        </Stack>
        <br/>
        <Stack spacing={2}>
          <p > During June of 2022, I created a personal brand to attach to any project and content I create online. With most of my current experience as a Software Engineer being in frontend web development, I am interested in working on fun and hands-on projects in a wide range of areas. I will be taking an unstructured, agile approach to my project development where I will quickly develop plans but will learn mostly from pushing out content or code as quick as I can and will adapt to new goals and mistakes. These projects will range from: </p>
          <p className="bold-blue"> WEB {'&'} MOBILE APPLICATIONS </p>
          <p className="bold-pink"> GAMES </p>
          <p className="bold-blue"> WEBSITE BUILDING {'&'} DESIGNS </p>
          <p className="bold-pink"> PHOTOS {'&'} VIDEO EDITING </p>
        </Stack>
        <br/>
        <p> Check out the home page of my brand below!</p>
        <br/>
        <Button href="https://drkdql.com">
          <Stack direction="row" alignItems="center" spacing={1}>
            <LanguageIcon/> 
            <h3> DRKDQL.com </h3>
          </Stack>
        </Button>
      </Stack>
    </Fade> 
  )
}

export default Brand
