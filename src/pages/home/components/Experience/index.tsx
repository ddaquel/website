import * as React from 'react'
import styles from './Experience.module.css'

import { Divider, Grid, Stack } from '@mui/material'
import Fade from 'src/shared/Fade';
import Image from 'next/image';

export interface IExperienceProps {}

type Job = {
  company: string,
  logo: string,
  period: string,
  role: string,
  descriptions: string[]
}

function Experience (props: IExperienceProps) {

  const jobs: Job[] = [
    {
      company: 'OFX',
      logo: '/assets/experience/OFX.png',
      period: 'Aug 2020 - now',
      role: 'Junior Software Engineer',
      descriptions: [
        'Currently, solving OKTA and AWS problems for the services surrounding onboarding.',
        'Solved REACT frontend problems for the team’s website.',
        'Developed a REACT UI component to expand the internal UI component library available to all teams',
        'Introduced a standalone REACT micro-frontend widget to help improve the user onboarding experience',
        'Participated in the team’s hackathon day to analyse the benefits of incorporating the widget mentioned above in an external party’s website.'
      ]
    },
    {
      company: 'Macquarie Group',
      logo: '/assets/experience/Macquarie.png',
      period: 'Jan 2020 - Jul 2020',
      role: 'UNSW Co-op Intern',
      descriptions: [
        'Solved REACT frontend problems to improve features in an internal web application.',
        'Upgraded dependencies in JAVA backend applications and utilised a few high level tools (AQUA, FORTIFY, OPENSHIFT, SUMO LOGIC) to address security vulnerability issues.',
      ]
    },
    {
      company: 'Atlassian',
      logo: '/assets/experience/Atlassian.png',
      period: 'Dec 2018 - Feb 2019',
      role: 'UNSW Co-op Intern',
      descriptions: [
        'Introduced a new changelog feature in an internal mobile app to help document changes for each version.',
        'Solved ANDROID and KOTLIN problems to improve features in the internal app.',
        'Updated MARKDOWN documentation to help new users of the internal app.'
      ]
    },
    {
      company: 'CBA',
      logo: '/assets/experience/Commonwealth.png',
      period: 'Dec 2017 - Feb 2018',
      role: 'UNSW Co-op Intern',
      descriptions: [
        'Developed automated acceptance tests using SPECFLOW, SELENIUM and C# to thoroughly test frontend components.',
        'Collaborated with an external party to help install a JAWS License Server to improve inclusivity.',
        'Investigated APPDYNAMICS and provided analytical dashboards to improve app monitoring.'
      ]
    }
  ]


  return (
    <Fade>
      <Stack alignItems="center">
        <h1 className={styles.title}> JOB EXPERIENCE </h1>
        <Grid container spacing={3}>  
            {jobs.map((job, i) => {
              return (
                <>
                  <Grid item xs={12}>
                    <Divider/>
                  </Grid>
                  <Grid item xs={3}> 
                      <Stack direction="row" spacing={2} height="100%" paddingLeft="20px">
                        <div>
                          <Image src={job.logo} height="50px" width="50px"  alt={`Company logo for ${job.company}`}/>
                          <h3> {job.company} </h3>
                          <p> <span className="bold-blue"> {job.role} </span> </p>
                          <p style={{ fontSize: '11px'}}> {job.period} </p>
                        </div>
                      </Stack>
                  </Grid>
                  <Grid item xs={9}> 
                    <Stack justifyContent="start">
                      <ul>
                        {job.descriptions.map((item, i) => {
                          return <li key={`description-${job.company}-${i}`}> {item} </li>
                        })}
                      </ul>
                    </Stack>
                  </Grid>
                </>
              )
            })}
        </Grid>
      </Stack>
    </Fade>
  )
}

export default Experience
