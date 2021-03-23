import Nav from './Nav'
import Meta from './Meta'
import Header from './Header'
import styles from '../styles/Layout.module.css'
import Landing from './Landing'
import Footer from './Footer'
 
const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
         <main className={styles.main}>
          <Landing /> 
          <Header />
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
