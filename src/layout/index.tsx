import { ReactNode} from 'react';
import { useRouter } from 'next/router';
import { BRAND, EXPERIENCE, HOME, SOCIALS } from 'src/constants/pageNames';
import styles from './Layout.module.css'

import { BottomNavigation, BottomNavigationAction, Stack  } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

import { motion } from 'framer-motion'

import Image from 'next/image';

export interface ILayoutProps {
  children?: ReactNode ,
  page: string
}

export function Layout (props: ILayoutProps) {

  const router = useRouter()

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

  const switchPage = (e: any, newValue: number) => {
    setTimeout(() => {
      switch (newValue) {
        case 3:
          router.push(`/${SOCIALS}`)
          break;
        case 2:
          router.push(`/${BRAND}`)
          break;
        case 1:
          router.push(`/${EXPERIENCE}`)
          break;
        case 0:
        default:
          router.push('/')
      }
    }, 200)
  }

  const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
}

  return (
    <>
      {/* BOTTOM HEADER */}
      <header className={styles.header}>
        <Stack direction="row" justifyContent="center" alignItems="center" height="100%" spacing={2}>
          <Image className={styles.photo} src="/assets/home/header-photo.svg" height="70px" width="70px"/>
          <h1 className={styles.title}> DEREK DAQUEL </h1>
        </Stack>
      </header>
      {/* MAIN CONTENT */}
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'linear' }}
      > 
        <main className={`${styles.content}`}> 
          {props.children}
        </main>
      </motion.main>
      {/* BOTTOM NAVIGATION */}
      <BottomNavigation
        showLabels
        value={convertPageToNavIndex(props.page)}
        onChange={switchPage}
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
