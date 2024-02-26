import React, {useState} from 'react';
import styles from './NormalCdf.module.css';
import ltqnorm from './normal.inverse.js'

const ConfInterval = () => {
    // useState
    const [input1, setInput1] = useState(95);
    const [input3, setInput3] = useState(0);
    const [input4, setInput4] = useState(1); // Start with default values
    // State for the result
    const [textResult, setTextResult] = useState('0');
    const [result, setResult] = useState('(0, 0)');


    // calculate normalCdf
    const calculateInterval = () => {
        
        // this is alpha over 2
        const alpha = (1 - Number(input1) / 100) / 2;
        const zScore = ltqnorm(1-alpha);
        const MOE = (zScore * Number(input4)).toFixed(3);
        setTextResult(`${input3} \u00B1 ${MOE}`);

        // also set the bracket notation result
        const lowerBound = Number(input3) - Number(MOE);
        const upperBound = Number(input3) + Number(MOE);
        setResult(`(${lowerBound}, ${upperBound})`);
    }
    

    return <div className={styles.wrapper}>
        <div className={`${styles.calcWrapper} ${styles.boxShadow}`}>
        <h1 style={{
            color: 'white',
            marginLeft: '20px',
            marginRight: '20px',
            fontSize: '30px'
        }}>Z-Confidence Interval</h1>
        <div className={styles.result}>{textResult}</div>
        <div className={styles.result}>{result}</div>
        <div className={styles.inputContainer}>
        <div style={{
                width:'170px'
            }}>Confidence Level (%):</div><input className={styles.numberEntry} type="number" value={input1} placeholder='Area' onChange={(e) => setInput1(e.target.value)} />
        </div>
        <div className={styles.inputContainer}>
        <div style={{
                width:'170px'
            }}>Statistic:</div><input className={styles.numberEntry} type="number" value={input3} placeholder='Mean' onChange={(e) => setInput3(e.target.value)} />
        </div>
        <div className={styles.inputContainer}>
        <div style={{
                width:'170px'
            }}>Standard Error:</div><input className={styles.numberEntry} type="number" value={input4} placeholder='Standard Deviation' onChange={(e) => setInput4(e.target.value)} />
        </div>
        <button className={styles.calcButton} onClick={calculateInterval}>Calculate Interval</button>
        </div>
    </div>;
};

export default ConfInterval;