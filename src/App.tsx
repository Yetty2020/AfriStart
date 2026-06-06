import Layout from "./components/Layout"
import Hero from "./section/Hero"
import Founder from "./section/Founder"
import Work from "./section/Work"
import Mission from "./section/Mission"
import Values from "./section/Values"


function App() {
  return (
   <Layout>
    <Hero/>
    <Founder/>
    <Mission/>
    <Work/>
    <Values/>
    
   </Layout>
  )
}

export default App
