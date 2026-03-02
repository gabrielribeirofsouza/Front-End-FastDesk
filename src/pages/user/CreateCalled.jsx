import styles from './CreateCalled.module.css'

function CreateCalled() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>

        {/* Logo / Título */}
        <header className={styles.header}>
          <span className={styles.logo}>FastDesk</span>
        </header>

        {/* Stepper */}
        <section className={styles.stepper}>
          <h2>Step by Step</h2>

          <div className={styles.steps}>
            <div className={`${styles.step} ${styles.active}`}>
              <span className={styles.dot}></span>
              <p>1. O Problema</p>
            </div>

            <div className={styles.step}>
              <p>2. Detalhes</p>
            </div>

            <div className={styles.step}>
              <p>3. Evidências</p>
            </div>
          </div>
        </section>

        {/* Conteúdo */}
        <section className={styles.content}>
          <h3>Proporção</h3>

          <div className={styles.field}>
            <input
              type="text"
              placeholder="Título Curto"
            />
          </div>

          <div className={styles.field}>
            <select>
              <option>Categoria do Serviço</option>
              <option>Hardware</option>
              <option>Software</option>
              <option>Rede</option>
              <option>Acesso</option>
            </select>
          </div>

          <div className={styles.checkbox}>
            <input type="checkbox" id="urgent" />
            <label htmlFor="urgent">Meio de Curto</label>
          </div>

          <div className={styles.field}>
            <input
              type="text"
              placeholder="Título Curto"
              disabled
            />
            <span className={styles.clear}>✕</span>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <button className={styles.primaryButton}>
            Continuar
          </button>
        </footer>

      </div>
    </div>
  )
}

export default CreateCalled