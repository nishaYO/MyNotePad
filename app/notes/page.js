import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <Header/>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -mx-4 -my-8">
      <div class="py-8 px-4 lg:w-1/3">
        <div class="h-full flex items-start">
          <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
            <span class="font-medium text-lg text-gray-800 title-font leading-none">18</span>
          </div>
          <div class="flex-grow pl-6">
            <h1 class="title-font text-xl font-medium text-gray-900 mb-3">The 400 Blows</h1>
            <p class="leading-relaxed mb-5">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> 
    </main>
    <Footer/>
    </>
  )
}
