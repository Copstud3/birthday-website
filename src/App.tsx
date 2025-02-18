import BirthdayMessage from "./sections/BirthdayMessage"
import Hero from "./sections/Hero"
import Reasons from "./sections/Reasons"


function App() {
    return (
    <div className="overflow-x-hidden w-lvw">
      <Hero/>
      <Reasons />
      <BirthdayMessage />
    </div>
  )
}

export default App
