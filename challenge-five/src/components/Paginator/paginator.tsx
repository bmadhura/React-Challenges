import styles from './paginator.module.scss';

const Paginator = ({handlePageSize, handlePageNumber}:any) =>{ 
    return(
        <div className={styles.paginator}>
        <select onChange={(e) => handlePageSize(parseInt(e.target.value))}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>

        <span onClick={() => handlePageNumber(-1)} className={styles.arrow}>&lt;</span>
        <span onClick={() => handlePageNumber(1)} className={styles.arrow}>&gt;</span>
      </div>
    )
}

export default Paginator;