import React from 'react'
import { Navbar,Cart,Hero,Sales,FlexContent,Stories,Footer } from './components';
import { heroapi,popularsales,toprateslaes,highlight,sneaker,story,footerAPI } from './data/data';

const App = () => {
  return (
   <>
    {/* <div className='bg-slate-900 h-screen grid place-content-center'>
      <h1 className='text-yellow-500 font-bold text-4xl'>NIKE</h1>
    </div> */}
    <Navbar/>
    <Cart/>
    <main className='flex flex-col gap-16 relative'>
      <Hero heroapi={heroapi}/>
      <Sales endpoint={popularsales} ifExists/>
      <FlexContent endpoint={highlight} ifExists/>
      <Sales endpoint={toprateslaes}/>
      <FlexContent endpoint={sneaker}/>
      <Stories story={story}/>
    </main>
    <Footer footerAPI={footerAPI}/>
   </>
  )
}

export default App