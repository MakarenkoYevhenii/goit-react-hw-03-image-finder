import styles from '../Button/Button.module.css'

const btnLoadMore = ({onclick}) => {
    return (
      <div className={styles.btnArea}>
      <button onClick={onclick} className={styles.btnLoadMore}>Load More</button>
      </div>
    );
  }
  
  export default btnLoadMore