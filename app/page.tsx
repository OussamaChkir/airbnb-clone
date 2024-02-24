import Image from 'next/image'
import Header from './components/Header'
import Banner from './components/Banner'
import axiosInstance from '@/lib/axiosInstance';
import axios from 'axios';
import SmallCard from './components/SmallCard';
import MediumCard from './components/MediumCard';
import LargeCard from './components/LargeCard';
import Footer from './components/Footer';

export default async function Home() {

  const exploreData = (await axios.get('https://www.jsonkeeper.com/b/4G1G')).data;
  const CardsData = (await axios.get('https://www.jsonkeeper.com/b/0RTV')).data;
  

  return (
    <div>
      <Header/>
      <Banner/>

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8'>
          {exploreData?.map((item:any)=>(
           <SmallCard key={item.img} img={item.img} location={item.location} distance={item.distance} />
          )

          )}
          </div>
        </section>

            <section>
            <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
            <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {CardsData.map((item:any)=>(
              <MediumCard key={item.img} img={item.img} title={item.title}/>
            ))}
            </div>
            </section>

              <LargeCard img="https://links.papareact.com/4cj" title="The Greatest Outdoors" description="Whishlist curated by Airbnb." btnText="Get inspired" />
      </main>
      
      <Footer/>
    </div>
  )
}
