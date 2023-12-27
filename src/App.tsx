import Image from './assets/img-1.jpeg'
import Zap from './assets/zap.png'
import Insta from './assets/insta.png'

function App() {

  let texto = "Seja bem-vinda ao Studio Felix, eu sou a Julia!! Para agilizar o seu atendimento me diga o seu nome e qual procedimento precisa realizar.";
  texto = window.encodeURIComponent(texto);

  return (
    <div className="h-screen w-full">

      <div className="h-screen bg-[url('./assets/img-2.jpeg')] opacity-25 bg-cover relative"></div>

      <div className='absolute top-2 left-0 w-full'>
        <div className='flex justify-center flex-col items-center mt-6'>
          <h2 className='font-bold text-6xl font-dancing text-slate-800'>Julia Felix</h2>
          <h3 className='mt-1 text-slate-700'>Lash Designer e Designer de Sobrancelhas</h3>
        </div>
        <div className='flex justify-center mt-28 h-[160px]'>
          <img src={Image} alt="Julia image" width={132} className='rounded-3xl border-emerald-100 border-2'/>
        </div>
        <div className='flex flex-col items-center mt-28'>
          <div className='flex justify-between items-center w-70'>
            <img src={Zap} alt="zap" width={50} />
            <a href={`https://wa.me/5511977574635?text=${texto}`} target='_blank' className='font-bold underline text-slate-700'>WhattsApp | Agendamentos</a>
          </div>
          <div className='flex items-center justify-between w-70 mt-10 ml-4'>
            <img src={Insta} alt="Instagram" width={30} />
            <a href='https://instagram.com/studioo_felix?igshid=ZWIzMWE5ZmU3Zg==' target='_blank' className='ml-2 font-bold underline text-slate-700'>Instagram</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
