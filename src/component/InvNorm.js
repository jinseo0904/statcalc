import React, {useState} from 'react';
import ltqnorm from './normal.inverse.js'
import styles from './NormalCdf.module.css';

const InvNorm = () => {
    // useState
    const [input1, setInput1] = useState(0);
    const [input3, setInput3] = useState(0);
    const [input4, setInput4] = useState(1); // Start with default values
    // State for the result
    const [result, setResult] = useState(0);


    // calculate normalCdf
    const calculateCdf = () => {
        const zScore = ltqnorm(input1);
        const zAdjust = (Number(zScore * input4) + Number(input3)).toFixed(4);

        console.log(zScore * input4 + input3);
        console.log(zAdjust);
        setResult(zAdjust);
    }
    

    return <div className={styles.wrapper}>
        <div className={`${styles.calcWrapper} ${styles.boxShadow}`}>
        <h1 style={{
            color: 'white',
            marginLeft: '20px',
            marginRight: '20px',
            fontSize: '30px'
        }}>Inverse Normal Distribution</h1>
        <div className={styles.result}>{result}</div>
        <div className={styles.inputContainer}>
        <div style={{
                width:'150px'
            }}>Area:</div><input className={styles.numberEntry} type="number" value={input1} placeholder='Area' onChange={(e) => setInput1(e.target.value)} />
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
        <button className={styles.calcButton} onClick={calculateCdf}>Calculate Z-Score</button>
        </div>
    </div>;
};

export default InvNorm;