import adverts from '../data/adverts.json';
import {useParams} from "react-router-dom";

function View(){

  const {id} = useParams();
  let advert;
  if (typeof id === "string") {
    advert = adverts.filter(ad => ad.id === parseInt(id)).pop();
  }

  console.log(advert)
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-2 py-10 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-96 overflow-hidden">
            <img alt="content" className="object-cover object-center h-full w-full" src={advert && advert.gallery[0].src} />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>

              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Agent Name</h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />

                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Lets chat</h2>

                <div className="relative mb-4">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                  <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                  <textarea id="message" name="message"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
                <div className="relative mb-4">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600"><input type='checkbox' /> By submitting this form I agree to the storage and processing of my personal data. </label>
                </div>

                <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
                <p className="text-xs text-gray-500 mt-3">This information is sent straight to the advertiser of this property.</p>

              </div>

            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <h3 className='text-lg py-4 text-violet-600'>{advert && advert.title}</h3>
              <p className="leading-relaxed mb-4">{advert && advert.description}</p>
              <ul className='flex'>
                <li className='p-2 mx-2 border'>{advert && advert.rooms.bed} Bed</li>
                <li className='p-2 mx-2 border'>{advert && advert.rooms.bath} Bath</li>
                <li className='p-2 mx-2 border'>{advert && (advert.rooms.garage?? 0) } Garage</li>
              </ul>

              <h3 className=' mt-4 text-xl'>Features</h3>
              <div className='grid grid-cols-3'>
                {advert && advert.features.map(f => {
                  return <div className='p-2'>{f.label}<label className='font-bold'> {f.value === 'y' ? 'Yes' : f.value}</label> </div>
                })}
              </div>
              <h3 className=' mt-4 text-xl'>Other photos</h3>
              <div className='grid grid-cols-2'>
                {advert && advert.gallery.map(g => {
                  return <img src={g.src} className='p-2' />
                })}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default View;
