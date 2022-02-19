import config from '../data/dataTypes.json';
import {useState} from "react";

function NewAdvert() {

  const [images, addImage] = useState([]);
  const doFileUpload = (f: any) => {
    console.log(f.target.value)

    const newInput = document.createElement('IMG');

    newInput.setAttribute('id', `img${images.length + 1}`);
    newInput.setAttribute('class', `border p-3 m-2`);
    newInput.setAttribute('src', f.target.value);
    //newInput.addEventListener('change', function(e) {console.log("change mofo"); doFileUpload(e)});

    const area = document.getElementById('filearea');

    if (area) {
      area.append(newInput);
    }
  };

  return (
    <div className="container px-5 py-12 mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">New Advert Placement</h1>
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-full md:w-1/2">
            <div className="relative">
              <label htmlFor="propertyType" className="leading-7 text-sm text-gray-600">Property Type</label>
              <select id="propertyType" name="propertyType"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              >
                <option>Select property type...</option>
                {config.propertyType.map(pt => {
                  return (
                    <option value={pt} key={`propertyType:${pt}`}>{pt}</option>
                  )
                })}
              </select>
            </div>
          </div>

          <div className="p-2 w-full md:w-1/2">
            <div className="relative">
              <label htmlFor="advertType" className="leading-7 text-sm text-gray-600">Advert Type</label>
              <select id="advertType" name="advertType"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              >
                <option>Select advert type...</option>
                {config.advertType.map(pt => {
                  return (
                    <option value={pt} key={`advertType:${pt}`}>{pt}</option>
                  )
                })}
              </select>

            </div>
          </div>

          <div className="p-2 w-full md:w-1/2">
            <div className="relative">
              <label htmlFor="province" className="leading-7 text-sm text-gray-600">Province</label>
              <select id="province" name="province"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              >
                <option>Select province...</option>
                {config.province.map(pt => {
                  return (
                    <option value={pt} key={`advertType:${pt}`}>{pt}</option>
                  )
                })}
              </select>

            </div>
          </div>

          <div className="p-2 w-full md:w-1/2">
            <div className="relative">
              <label htmlFor="amount" className="leading-7 text-sm text-gray-600">Amount in ZAR</label>
              <input id="amount" name="amount" type='number'
                     className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          <div className="p-2 w-full">
            <div className="grid md:grid-cols-3 sm:grid-cols-1 text-center ">
              {config.stats.Count.map(pt => {
                return (
                  <div key={`statCount:${pt.stat}`} className='m-3'>
                    <div className='w-full'>{pt.label}</div>
                    <input type="tel" className="text-center w-12 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-2 leading-8 transition-colors duration-200 ease-in-out"/>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="p-2 w-full">
            <div className="relative flex text-center flex-wrap grid md:grid-cols-3 xs:grid-cols-1">
              {config.stats.Has.map(pt => {
                return (
                  <div key={`statCount:${pt}`} className='m-3 border p-1 rounded-lg border-gray-300'>
                    <label className='cursor-pointer'>
                      <input type="checkbox" className="text-center bg-opacity-50 rounded focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 m-2 leading-8 transition-colors duration-200 ease-in-out"/>
                      {`${pt[0].toUpperCase()}${pt.substring(1).toLowerCase()}`.replaceAll('_', ' ')}
                    </label>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="p-2 w-full">
            <div className="grid md:grid-cols-2 sm:grid-cols-1 text-center ">
              {config.stats.Size.map(pt => {
                return (
                  <div key={`statCount:${pt}`} className='m-3 grid-cols-1'>
                    <div className='w-full'>{`${pt[0].toUpperCase()}${pt.substring(1).toLowerCase()}`.replace('_', ' ')}</div>
                    <input type="tel"
                           className="text-center w-24 bg-indigo-200 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-2 leading-8 transition-colors duration-200 ease-in-out m-2"/>
                  </div>
                )
              })}
            </div>
          </div>


          <div className="p-2 w-full">
            <div className="relative">
              <label htmlFor="description" className="leading-7 text-sm text-gray-600">Description</label>
              <textarea id="description" name="description"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
          </div>

          <div>
            Add Images
            <input type='file' className='border p-3 m-2' id='fl1' onChange={(e) => doFileUpload(e)}/>
            <div id='filearea' className='w-full'>

            </div>
          </div>

          <div className="p-2 w-full">
            <button type='button' className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-violet-400 rounded text-lg">Submit</button>
          </div>
          <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
            <a className="text-pink-800">hello@classify.co.za</a>
            <span className="inline-flex">
          </span>
          </div>
        </div>
      </div>
    </div>

  )
}

export default NewAdvert;
