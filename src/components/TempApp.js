import React, {useState} from 'react';
import styles from './css/TempApp.module.css';

const TempApp = () => {
    const [data, setData] = useState('');
  
    const onChangeHandler = (event) => {
          console.log(event.target.value)
          setData(event.target.value)
    }

  return (
    <>
    <div className={styles.box}>
        <div className={styles.inputData}>
            <input 
            className={styles.inputField}
            type='search' 
            value={data} 
            placeholder='Enter the city' 
            onChange={onChangeHandler}/>
        </div>

        <div className={styles.info}>
             <h2 className={styles.location}>
                 <i class="fa-solid fa-street-view"></i> Pune</h2>
             <h2 className={styles.temp}>Celsius</h2>
        </div>  
    </div>
    </>
  )
}

export default TempApp;