import Header from "./components/Header/Header"
import HeroSection from "./components/HeroSection/HeroSection"
import OrderFoodOnTheGo from "./components/OrderFoodOnTheGo/OrderFoodOnTheGo"
import ViewMenu from "./components/ViewMenu/ViewMenu"
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs"
import BulkOrders from "./components/BulkOrders/BulkOrders"
import Question from "./components/Question/Question"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <>
      <Header/>
      <HeroSection />
      <WhyChooseUs />
      <ViewMenu />
      <OrderFoodOnTheGo />
      <BulkOrders />
      <Question />
      <Footer />
    </>
  )
}

export default App
