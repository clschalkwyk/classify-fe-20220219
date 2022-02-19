import {useState} from 'react';
import adverts from '../data/adverts.json';
import MediumCard from "../components/MediumCard";


function Home() {
  const [highlighted, setHighlighted] = useState(null);

  const ads = adverts;


  return (
      <div className="App p-2 bg-gray-100">

        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          {ads && ads.map(ad => {

            return (
                <a href={`/view/${ad.id}`} key={ad.id}>
                  <MediumCard ad={ad}/>
                </a>
            );
          })}
        </div>
      </div>
  );
}

export default Home;
