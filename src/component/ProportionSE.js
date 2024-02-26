import React, {useState} from 'react';
import { FormControl, FormLabel, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import styles from './NormalCdf.module.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Lato = '../fonts/Lato/Lato-Regular.ttf';

const theme = createTheme({
typography: {
    fontFamily: 'Lato, Arial',
    },
  components: {
    MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Lato';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('Raleway'), local('Raleway-Regular'), url(${Lato}) format('truetype');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
      },

    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          // Adjust the margin as needed
          marginBottom: '-10px',
          color: 'white',
        },
      },
    },
  },
});

const ProportionSE = () => {
    // useState
    const [input1, setInput1] = useState(0.5);
    const [input2, setInput2] = useState(10);
    const [input3, setInput3] = useState(0.5);
    const [input4, setInput4] = useState(10); // Start with default values
    // State for the result
    const [result, setResult] = useState(0);
    const [radioOption, setRadioOption] = useState("One p");


    // calculate normalCdf
    const calculateSE = () => {
        if (radioOption === 'One p') {
            const pVal = Number(input1);
            const n = Number(input2);
            const frac = (pVal * (1-pVal)) / n;
            setResult(Math.sqrt(frac).toFixed(4));

        } else if (radioOption === 'Two p') {
            const pVal = Number(input1);
            const n = Number(input2);
            const pVal2 = Number(input3);
            const n2 = Number(input4);

            const frac = (pVal * (1-pVal)) / n;
            const frac2 = (pVal2 * (1-pVal2)) / n2;
            setResult(Math.sqrt(frac + frac2).toFixed(4));
        } else if (radioOption === 'Two p (p1=p2)') {
            const pVal = Number(input1);
            const n = Number(input2);
            const pVal2 = Number(input3);
            const n2 = Number(input4);

            // calculate p_combined
            const X1 = pVal * n;
            const X2 = pVal2 * n2;
            const pc = (X1+X2) / (n+n2);
            const frac = (1/n) + (1/n2);
            setResult(Math.sqrt(pc * (1-pc) * frac).toFixed(4));
        }
    }
    

    return <div className={styles.wrapper}>
        <div className={`${styles.calcWrapper} ${styles.boxShadow}`}>
        <h1 style={{
            color: 'white',
            marginLeft: '20px',
            marginRight: '20px',
            fontSize: '30px'
        }}>SE (Proportions)</h1>
        <div className={styles.radioResult}>{result}</div>
        <div className={styles.radioContainer}>
        <ThemeProvider theme={theme}>
        <FormControl>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                defaultValue="One p"
                name="row-radio-buttons-group"
                value={radioOption}
                onChange={(e) => setRadioOption(e.target.value)}
            >
                <FormControlLabel value="One p" control={<Radio />} label="One p" />
                <FormControlLabel value="Two p" control={<Radio />} label="Two p" />
                <FormControlLabel value="Two p (p1=p2)" control={<Radio />} label="Two p (p1=p2)" />
            </RadioGroup>
            </FormControl>
        </ThemeProvider>
        </div>
        <div className={styles.inputContainer}>
        <div style={{
                width:'150px'
            }}>Proportion (p1)</div><input className={styles.numberEntry} type="number" value={input1} placeholder='Area' onChange={(e) => setInput1(e.target.value)} />
        </div>
        <div className={styles.inputContainer}>
        <div style={{
                width:'150px'
            }}>Sample Size (n1)</div><input className={styles.numberEntry} type="number" value={input2} placeholder='Mean' onChange={(e) => setInput2(e.target.value)} />
        </div>
        <div className={styles.inputContainer}>
        <div style={{
                width:'150px'
            }}>Proportion (p2)</div><input className={styles.numberEntry} type="number" value={input3} placeholder='Standard Deviation' onChange={(e) => setInput3(e.target.value)} />
        </div>
        <div className={styles.inputContainer}>
        <div style={{
                width:'150px'
            }}>Sample Size (n2)</div><input className={styles.numberEntry} type="number" value={input4} placeholder='Standard Deviation' onChange={(e) => setInput4(e.target.value)} />
        </div>

        <button className={styles.calcButton} onClick={calculateSE}>Calculate Standard Error</button>
        </div>
    </div>;
};

export default ProportionSE;