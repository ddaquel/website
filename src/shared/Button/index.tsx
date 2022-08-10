import * as React from 'react';
import styles from './Button.module.css'

import { Button as MuiButton } from '@mui/material'
import { motion } from 'framer-motion'

export interface IButtonProps {
    children?: React.ReactNode,
    href: string
}

function Button (props: IButtonProps) {
  return (
    <motion.div
        className={styles.button}
        whileHover={{ scale: 1.1}}
    > 
        <MuiButton variant="contained" href={props.href}> 
            {props.children}
        </MuiButton>
    </motion.div>
  );
}

export default Button
