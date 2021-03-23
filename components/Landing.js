import landingStyles from '../styles/Landing.module.css'

const Landing = () => {
  return (
    <div className={landingStyles.landing} >
      <div className={landingStyles.title}>
        <h2>Best Themes and</h2>
         <h1> Plugins Marketplace</h1>
         <div className={landingStyles.description}>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
           ut labore et dolore magna aliqua. Quis ipsum suspendisse</p>
         </div>
           
      </div>
      

      <form className={landingStyles.searchform}>
      <input type="text" placeholder="Is it me you’re looking for?"/>
      <button type="submit">Search</button>
     </form>
       
      
    </div>
  )
}

export default Landing
