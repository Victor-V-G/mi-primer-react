
import styles from './page.module.css';

export default function Home() {
  return (
    <div className="grid-container">
      <header className="header">
        <p>hola soy el header</p>
        <div className="headerbox">
          <h1 className={styles.logoStyle}>LOGO</h1>
        </div>
        <div>
          
        </div>
      </header>
      <main className="main">
        <p>hola soy el main</p>
        <form action="onclick"></form>
        <button>gola</button>
      </main>
      <footer className="footer">
        <p>hola soy el footer</p>
      </footer>
    </div>
  );
}
