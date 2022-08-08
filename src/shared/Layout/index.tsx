import * as React from 'react'
import styles from './Layout.module.css'

import { BRAND, EXPERIENCE, HOME, SOCIALS } from 'src/constants/pageNames';
import { BottomNavigation, BottomNavigationAction, Stack  } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';

export interface ILayoutProps {
  children?: React.ReactNode,
  page: string,
  switchPage: (newValue: number) => void
}

function Layout (props: ILayoutProps) {

  const convertPageToNavIndex = (page: string) : number => {
    switch (page) {
      case SOCIALS:
        return 3
        break;
      case BRAND:
        return 2
        break;
      case EXPERIENCE:
        return 1
        break
      case HOME:
      default:
        return 0
    }
  }

  return (
    <>
      {/* BOTTOM HEADER */}
      <header className={styles.header}>
        <Stack direction="row" justifyContent="center" alignItems="center" height="100%" spacing={2}>
          <Image className={styles.photo} src="/assets/home/header-photo.svg"  height="70px" width="70px" alt="Picture of Derek Daquel in the Header"/>
          <h1 className={styles.title}> DEREK DAQUEL </h1>
        </Stack>
      </header>
      {/* MAIN CONTENT */}
      <AnimatePresence>
        <main className={`${styles.content}`}> 
          {props.children}
        </main>
      </AnimatePresence>
      {/* BOTTOM NAVIGATION */}
      <BottomNavigation
        showLabels
        value={convertPageToNavIndex(props.page)}
        onChange={(_, newValue) => { props.switchPage(newValue) }}
        className={styles.bottomNavigation}
      >
        <BottomNavigationAction label="HOME" icon={<HomeIcon/>}/>
        <BottomNavigationAction label="EXPERIENCE" icon={<WorkIcon/>}/>
        <BottomNavigationAction label="BRAND" icon={<CodeIcon/>}/>
        <BottomNavigationAction label="SOCIALS/CONTACT" icon={<AccountTreeIcon/>}/>
      </BottomNavigation>
    </>
  );
}

export default Layout