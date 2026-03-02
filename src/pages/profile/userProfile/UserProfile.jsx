import styles from './UserProfile.module.css'

function UserProfile() {
  const user = {
    initials: 'JS',
    name: 'João da Silva',
    role: 'Usuário',
    position: 'Analista de Vendas',
    department: 'Comercial',
    employeeId: '#8829',
    email: 'joao.silva@empresa.com.br',
    phone: '(11) 98765-4321'
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>

        {/* Header */}
        <header className={styles.header}>
          <button className={styles.backButton}>{'< Voltar'}</button>
          <h1>MEU PERFIL E CONFIGURAÇÕES</h1>
        </header>

        {/* Perfil */}
        <section className={styles.profileSection}>
          <div className={styles.avatar}>
            <span>{user.initials}</span>
          </div>

          <button className={styles.changePhoto}>
            Alterar Foto
          </button>

          <div className={styles.info}>
            <h2>INFORMAÇÕES DA CONTA</h2>
            <p><strong>Nome:</strong> {user.name}</p>
            <p><strong>Cargo:</strong> {user.position}</p>
            <p><strong>Setor:</strong> {user.department}</p>
            <p><strong>ID Funcional:</strong> {user.employeeId}</p>
          </div>
        </section>

        {/* Dados de Contato */}
        <section className={styles.contactSection}>
          <h3>1. DADOS DE CONTATO</h3>

          <div className={styles.field}>
            <label>E-mail Corporativo</label>
            <div className={styles.inputGroup}>
              <input type="text" value={user.email} disabled />
              <button>Editar</button>
            </div>
          </div>

          <div className={styles.field}>
            <label>Telefone / Ramal</label>
            <div className={styles.inputGroup}>
              <input type="text" value={user.phone} disabled />
              <button>Editar</button>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default UserProfile