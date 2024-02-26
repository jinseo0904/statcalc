import styles from './NormalCdf.module.css';
import React, {useState} from 'react';

var ss = require('simple-statistics');

const NormalCdf = () => {
    // useState
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);
    const [input3, setInput3] = useState(0);
    const [input4, setInput4] = useState(1); // Start with default values
    // State for the result
    const [result, setResult] = useState(0);


    // calculate normalCdf
    const calculateCdf = () => {
        const zLower = (input1 - input3) / input4;
        const zUpper = ((input2 - input3) / input4).toFixed(4);
 
        const lowerProb = (zLower <= -4)? 0 : ss.cumulativeStdNormalProbability(zLower);
        const upperProb = (zUpper >= 5) ? 1 : ss.cumulativeStdNormalProbability(zUpper);

        console.log('zLower: ', zLower);
        console.log('zUpper: ', zUpper);
        console.log(lowerProb);
        console.log(upperProb);
        setResult((upperProb - lowerProb).toFixed(5));
    }
    

    return <div className={styles.wrapper}>
        <div className={`${styles.calcWrapper} ${styles.boxShadow}`}>
        <h1 style={{
            color: 'white',
            fontSize: '30px'
        }}>Normal Cdf</h1>
        <div className={styles.result}>{result}</div>
        <div className={styles.inputContainer}>
            <div style={{
                width:'150px'
            }}>Lower Bound:</div><input className={styles.numberEntry} type="number" value={input1} placeholder='Lower Bound' onChange={(e) => setInput1(e.target.value)} />
        </div>
        <div className={styles.inputContainer}>
        <div style={{
                width:'150px'
            }}>Upper Bound:</div><input className={styles.numberEntry} type="number" value={input2} placeholder='Upper Bound' onChange={(e) => setInput2(e.target.value)} />
        </div>
        <div className={styles.inputContainer}>
        <div style={{
                width:'150px'
            }}>Mean:</div><input className={styles.numberEntry} type="number" value={input3} placeholder='Mean' onChange={(e) => setInput3(e.target.value)} />
        </div>
        <div className={styles.inputContainer}>
        <div style={{
                width:'150px'
            }}>Standard Deviation:</div><input className={styles.numberEntry} type="number" value={input4} placeholder='Standard Deviation' onChange={(e) => setInput4(e.target.value)} />
        </div>
        <button className={styles.calcButton} onClick={calculateCdf} >Calculate Probability</button>
        </div>
    </div>;
};

export default NormalCdf;