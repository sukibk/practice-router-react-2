import styles from './ErrorHandler.module.css'

export default function ErrorHandler (props) {
    return <div className={styles.main}>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
    </div>
}