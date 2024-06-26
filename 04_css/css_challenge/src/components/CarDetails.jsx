import styles from '../CarDetails.module.css';

function CarDetails({marca, modelo, ano, km, isNew}) {

  return (
    <div className={styles.cardetails_div}>
        <h1>{marca} {modelo}</h1>
        <p>Ano {ano} - {km}Km rodados.</p>
        {isNew ? <p className={styles.cardetails_p_new}>Carro Novo!</p> : null}
    </div>
  )
}

export default CarDetails