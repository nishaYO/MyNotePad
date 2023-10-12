import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <Header/>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      hello notes here 
    </main>
    <Footer/>
    </>
  )
}
