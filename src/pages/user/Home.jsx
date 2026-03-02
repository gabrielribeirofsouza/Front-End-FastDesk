import styles from './home.module.css'
import { useNavigate } from 'react-router-dom'
import { getLoggedUser } from '../../services/authService'
import { useState } from 'react'

export default function HomeUser() {
    const navigate = useNavigate()
    const user = getLoggedUser()
    const handleCreateCall = () => {
    navigate('/createCalled')
    }
    const handleProfile = () => {
        navigate('/userProfile')
    }

    const handleChat = () => {
    navigate('/chat')
    }
    const [openNotifications, setOpenNotifications] = useState(false)
  return (
    <div className={styles.container}>
      
      {/* HEADER */}
      <header className={styles.header}>
        <h2>FastDesk</h2>

        <div className={styles.headerRight}>
            <span className={styles.notificationBtn} onClick={() => setOpenNotifications(prev => !prev)}>
                Notificações
            </span>   
            <span className={styles.profileBtn} onClick={handleProfile}>
                Perfil
            </span>
            {openNotifications && (
                <div className={styles.notificationPanel}>
                    <p>Nenhuma notificação no momento</p>
                </div>
            )}
        </div>
      </header>

      {/* HERO */}
      <section className={styles.hero}>
        <h1>
          Olá, <strong>{user?.email}</strong> 👋 <br />
          Como podemos ajudar hoje?
        </h1>

        <button 
        className={styles.newCallBtn} onClick={handleCreateCall}>
          + Criar Novo Chamado
        </button>
      </section>

      {/* CHAMADOS */}
      <section className={styles.calls}>
        <h3>Meus chamados ativos (3)</h3>

        <div className={styles.callCard}>
          <div className={styles.callAvatar}></div>

          <div className={styles.callInfo}>
            <span className={styles.subject}>Problema com acesso</span>
            <span className={styles.status}>Em análise</span>
          </div>

          <div className={styles.lastUpdate}>
            Aguardando
          </div>
        </div>
      </section>

      {/* AJUDA RÁPIDA */}
      <section className={styles.quickHelp}>
        <h3>Precisa de ajuda rápida?</h3>

        <div className={styles.helpCards}>
          <div className={styles.helpCard}>FAQ / Base de Conhecimento</div>
          <div className={styles.helpCard} onClick={handleChat}>
            Chat em Tempo Real
          </div>
        </div>
      </section>

    </div>
  )
}