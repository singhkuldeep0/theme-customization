import Modal from '../components/Modal'
import { Inter, Modak } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <main className='relative flex justify-center items-center min-h-screen bg-black'>
    <h1 className='absolute top-10 text-white text-2xl'>Twitter Theme Customization</h1>
    <Modal/>
   </main>
  )
}
