
import './App.css'
import Countries from './components/countries/Countries'

const countriesPromisr= fetch('https://openapi.programming-hero.com/api/all')





function App() {


  return (
    <>
      
      <Countries> </Countries>
    
    </>
  )
}

export default App
