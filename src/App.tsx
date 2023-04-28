import Image from './assets/image.jpeg'
import Zap from './assets/zap.png'
import Insta from './assets/insta.png'

function App() {

  return (
    <div className="h-screen w-full">

      <div className="h-screen bg-[url('./assets/background.jpeg')] opacity-25 bg-cover relative"></div>

      <div className='absolute top-2 left-0 w-full'>
        <div className='flex justify-center flex-col items-center mt-6'>
          <h2 className='font-bold text-6xl font-dancing'>Julia Felix</h2>
          <h3 className='mt-1'>Designer de sobrancelhas</h3>
        </div>
        <div className='flex justify-center mt-28 h-[160px]'>
          <img src={Image} alt="Julia image" width={150} height={150} className='rounded-full border-emerald-200 border-2'/>
        </div>
        <div className='flex flex-col items-center mt-28'>
          <div className='flex justify-between items-center w-70'>
            <img src={Zap} alt="zap" width={50} height={50} />
            <a href='https://wa.me/5511977574635?text=Seja%20bem-vinda%20ao%20Studio%20Felix,%20eu%20sou%20Julia!!%20%20Para%20agilizar%20o%20seu%20atendimento%20me%20diga%20o%20seu%20nome%20e%20qual%20procedimento%20deseja%20realizar.' target='_blank' className='font-bold underline'>WhattsApp | Agendamentos</a>
          </div>
          <div className='flex items-center justify-between w-70 mt-10 ml-4'>
            <img src={Insta} alt="Instagram" width={30} height={30} />
            <a href='https://instagram.com/studioo_felix?igshid=ZWIzMWE5ZmU3Zg==' target='_blank' className='ml-2 font-bold underline'>Instagram</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
