import styles from './banner.module.css';

const Banner = (props) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <sapan className={styles.title1}>Coffee</sapan>
                <sapan className={styles.title2}>Connoisseur</sapan>
            </h1>
            <p className={styles.subtitle}>Discover your local coffee shops!</p>
            <div className={styles.buttonWrapper}>
                <button className={styles.button} onClick={props.handleOnClick}>{props.buttonText}
                </button>
            </div>
        </div>
    );
};

export default Banner;