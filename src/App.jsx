import Header from "./components/Header/Header"
import LandingPage from "./components/LandingPage/LandingPage"
import OrderFoodOnTheGo from "./components/OrderFoodOnTheGo/OrderFoodOnTheGo"
import ViewMenu from "./components/ViewMenu/ViewMenu"
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs"
import BulkOrders from "./components/BulkOrders/BulkOrders"
import Question from "./components/Question/Question"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <>
      <Header />
      <LandingPage />
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
