import React, {useState} from 'react';
import styles from './BottomNavBar.module.css';
import githubLogo from '../images/github.png';
import { width } from '@mui/system';

const BottomNavBar = () => {
    return <div className={styles.NavBar}>
        <p className={styles.p1}>
            Made By: Jin-seo Kim
        </p>

        <div className={styles.ghLogo}>
      <a href="https://github.com/jinseo0904/statcalc" target="_blank" rel="noopener noreferrer">
        <img src={githubLogo} alt="GitHub repo" width="31" />
      </a>
    </div>
    </div>
};

export default BottomNavBar;