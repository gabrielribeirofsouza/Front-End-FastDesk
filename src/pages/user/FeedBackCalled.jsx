import styles from './FeedBackCalled.module.css'

function FeedBackCalled() {
  return (
    <div className={styles.overlay}>
      <div className={styles.card}>

        {/* Header */}
        <div className={styles.header}>
          <button className={styles.close}>✕ Fechar</button>
        </div>

        {/* Ícone de sucesso */}
        <div className={styles.successIcon}>
          {/* futuramente: imagem de check */}
        </div>

        <h1 className={styles.title}>
          Chamado #102 encerrado!
        </h1>

        <p className={styles.subtitle}>
          “Obrigado por nos ajudar a melhorar.”
        </p>

        {/* Avaliação */}
        <section className={styles.ratingSection}>
          <h2>Como você avalia este atendimento?</h2>

          <div className={styles.ratingGrid}>
            <div className={styles.ratingBox}>
              <div className={styles.ratingIcon}></div>
              <span>Péssimo</span>
            </div>

            <div className={styles.ratingBox}>
              <div className={styles.ratingIcon}></div>
              <span>Ok</span>
            </div>

            <div className={styles.ratingBox}>
              <div className={styles.ratingIcon}></div>
              <span>Bom</span>
            </div>

            <div className={styles.ratingBox}>
              <div className={styles.ratingIcon}></div>
              <span>Ótimo</span>
            </div>

            <div className={styles.ratingBox}>
              <div className={styles.ratingIcon}></div>
              <span>Incrível!</span>
            </div>
          </div>
        </section>

        {/* Resolução */}
        <section className={styles.resolveSection}>
          <p>O técnico Ricardo Silva resolveu seu problema?</p>

          <div className={styles.radioGroup}>
            <label>
              <input type="radio" name="resolve" />
              Sim, totalmente
            </label>

            <label>
              <input type="radio" name="resolve" />
              Parcialmente
            </label>

            <label>
              <input type="radio" name="resolve" />
              Não
            </label>
          </div>
        </section>

        {/* Comentário */}
        <section className={styles.commentSection}>
          <label>
            Deixe um comentário adicional (opcional):
          </label>
          <textarea />
        </section>

        {/* Ações */}
        <footer className={styles.actions}>
          <button className={styles.secondary}>
            Reabrir chamado
          </button>

          <button className={styles.primary}>
            Finalizar avaliação
          </button>
        </footer>

      </div>
    </div>
  )
}

export default FeedBackCalled