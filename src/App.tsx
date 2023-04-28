import Image from './assets/image.jpeg'
import Zap from './assets/zap.png'
import Insta from './assets/insta.png'

function App() {

  return (
    <div className="h-screen w-full">

      <div className="h-screen bg-[url('./assets/background.jpeg')] opacity-25 bg-cover relative"></div>

      <div className='absolute top-2 left-0 w-full'>
        <div className='flex justify-center flex-col items-center mt-6'>
          <h2 className='font-bold text-3xl'>Julia Felix</h2>
          <h3 className='mt-1'>Designer de sobrancelhas</h3>
        </div>
        <div className='flex justify-center mt-28 h-[160px]'>
          <img src={Image} alt="Julia image" width={150} height={150} className='rounded-full border-emerald-200 border-2'/>
        </div>
        <div className='flex flex-col items-center mt-28'>
          <div className='flex justify-start items-center w-80'>
            <img src={Zap} alt="zap" width={50} height={50} />
            <a href='https://wa.me/5511977574635?text=Conversar%20com%20Julia%20do%20Studio%20Felix' target='_blank' className='font-bold underline'>WhattsApp | Agendamentos</a>
          </div>
          <div className='flex items-center justify-start w-80 mt-10 ml-4'>
            <img src={Insta} alt="Instagram" width={30} height={30} />
            <a href='https://instagram.com/studioo_felix?igshid=ZWIzMWE5ZmU3Zg==' target='_blank' className='ml-2 font-bold underline'>Instagram</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
