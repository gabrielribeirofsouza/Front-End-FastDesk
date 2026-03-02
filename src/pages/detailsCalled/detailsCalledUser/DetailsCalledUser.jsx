import styles from './DetailsCalledUser.module.css'

function DetailsCalledUser() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>

        {/* Header */}
        <header className={styles.header}>
          <button className={styles.back}>← Voltar</button>
        </header>

        {/* Título */}
        <h1 className={styles.title}>
          Chamado #102: Notebook não liga
        </h1>

        {/* Info */}
        <div className={styles.info}>
          <span className={styles.status}>EM ANÁLISE</span>
          <span className={styles.technician}>
            Técnico: Ricardo Silva
          </span>
        </div>

        {/* Histórico */}
        <section className={styles.history}>
          <h2>Histórico</h2>

          <div className={`${styles.message} ${styles.user}`}>
            <span className={styles.meta}>Você · 09:00</span>
            <p>Apertei o botão e nada acontece.</p>
          </div>

          <div className={styles.system}>
            Sistema · 09:05 — Chamado atribuído ao técnico Ricardo.
          </div>

          <div className={`${styles.message} ${styles.tech}`}>
            <span className={styles.meta}>Ricardo · 09:15</span>
            <p>Pode verificar se o carregador está ok?</p>
          </div>
        </section>

        {/* Resposta */}
        <footer className={styles.reply}>
          <input
            type="text"
            placeholder="Escreva sua resposta aqui..."
          />
          <button>Enviar</button>
        </footer>

      </div>
    </div>
  )
}

export default DetailsCalledUser