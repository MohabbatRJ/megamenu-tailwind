import Button from "./components/Button"
import Navbar from "./components/navbar/Navbar"

function App() {
  

  return (
    <div className="max-w-[1400px] mx-auto ">
      <section className='h-screen bg-Banner bg-cover bg-center bg-no-repeat object-cover '>
        <Navbar/>
        <div className='flex flex-col justify-center items-center h-full text-white '>
          <h2 className='text-2xl font-medium'>Fashion Tips</h2>
          <h1 className="py-5 text-3xl md:text-5xl font-semibold">Items every woman should have</h1>

          <div className="text-xl">
            <Button/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
