import styles from "../styles/footer.module.css";



export default function Footer() {
  return (
    <footer className={styles.container}>
    
        <div className={styles.grid}>
          <div>
            <h5>About us</h5>
            <p>Designs products and experience for users.</p>
          </div>
          <div>
            <h5>Contact</h5>
           
              <p>birdev@gmail.com</p>
              <p>+46005</p>
            
          </div>
          <address>
            <h5>Address</h5>
       
              <p>stockholm vägen 1</p>
              <p>Sweden</p>
              <p>stockholm</p>
              <p>1234</p>
           
          </address>
          <div>
            <h5>Other Links</h5>
         
              <p>Privacy Policy</p>
          
          </div>
        </div>
     
    </footer>
  );
}
