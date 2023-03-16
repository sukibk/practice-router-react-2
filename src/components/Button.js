import styles from './Button.module.css'
import {NavLink} from "react-router-dom";

export default function Button(props){
    return <div className={styles.cont}>
        <br/>
        <NavLink to='new'  className={styles.button}>{props.children}</NavLink>
    </div>
}