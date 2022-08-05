import { Button, Stack } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { SOCIALS } from 'src/constants/pageNames'
import { Layout } from 'src/layout'
import styles from './Socials.module.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

type Social = {
  logo: React.ReactNode,
  text: string,
  href: string
}

const Socials: NextPage = () => {

  const socials: Social[] = [
    {
      logo: <LinkedInIcon/>,
      text: '@ddaquel',
      href: 'https://linkedin.com/in/ddaquel'
    },
    {
      logo: <FacebookIcon/>,
      text: '@ddaquel',
      href: 'https://facebook.com/ddaquel'
    },
    {
      logo: <EmailIcon/>,
      text: 'derekdaquel@gmail.com',
      href: 'mailto:derekdaquel@gmail.com?subject=Enquiry%20-%20derekdaquel.com&body=Hi%20Derek%2C%0D%0A%0D%0A%7BReason%20for%20messaging%7D%0D%0A%0D%0AKind%20regards%2C%0D%0A%7BYour%20name%7D'
    },
  ]

  return (
    <Layout page={SOCIALS}>
      <Stack alignItems="center" spacing={4} textAlign="center" justifyContent="center" height="100%">
        <h1 className={styles.title}> Connect with me! </h1>
        <Stack alignItems="center">
          <p> Click the icons below to view my profile 🤙 </p>
          <p style={{ fontSize: 'small'}}> <span className='bold-pink'> Note: </span> If you would like to add or connect me, please state your reason in doing so just as a precaution if I haven{`'`}t met you. Thanks!</p>
        </Stack>
        { socials.map((item, i) => {
          return (
            <Button key={`social-button-${i}`} variant="contained" href={item.href}>
              <Stack direction="row" alignItems="center" spacing={1}>
                {item.logo}
                <h3> { item.text } </h3>
              </Stack>
            </Button>
          )
        })}
      </Stack>
    </Layout>
  )
}

export default Socials
