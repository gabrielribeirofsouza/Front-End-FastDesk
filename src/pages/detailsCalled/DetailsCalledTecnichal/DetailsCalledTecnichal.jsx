import styles from './DetailsCalledTecnichal.module.css'

function DetailsCalledTecnichal() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>

        <header className={styles.header}>
          <button className={styles.back}>← Voltar</button>
        </header>

        <h1 className={styles.title}>
          Chamado #102: Notebook não liga
        </h1>

        <div className={styles.info}>
          <span className={styles.status}>EM ANÁLISE</span>
          <span className={styles.user}>Usuário: João da Silva</span>
        </div>

        <section className={styles.history}>
          <h2>Histórico</h2>

          <div className={`${styles.message} ${styles.userMsg}`}>
            <span className={styles.meta}>Usuário · 09:00</span>
            <p>Apertei o botão e nada acontece.</p>
          </div>

          <div className={styles.system}>
            Sistema · 09:05 — Chamado atribuído a você.
          </div>

          <div className={`${styles.message} ${styles.techMsg}`}>
            <span className={styles.meta}>Você · 09:15</span>
            <p>Pode verificar se o carregador está ok?</p>
          </div>
        </section>

        <footer className={styles.reply}>
          <input placeholder="Responder ao usuário..." />
          <button>Enviar</button>
        </footer>

      </div>
    </div>
  )
}

export default DetailsCalledTecnichal