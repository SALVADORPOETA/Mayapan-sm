import Footer from './components/Footer'
import Hero from './components/Hero'
import HomeContainer from './components/HomeContainer'
import Navbar from './components/Navbar'
import Subscribe from './components/Subscribe'

export default function Home() {
  return (
    <main>
      <h1 className="font-ebGaramond">
        <Navbar />
        <Hero />
        <HomeContainer />
        <Subscribe />
        <Footer />
      </h1>
    </main>
  )
}
