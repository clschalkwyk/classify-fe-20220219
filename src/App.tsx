import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Link, Outlet, Route, Routes} from "react-router-dom";
import View from './pages/View';
import Home from "./pages/Home";
import NewAdvert from "./pages/NewAdvert";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="view/:id" element={<View />} />
        <Route path="place-ad" element={<NewAdvert />} />
        {/*<Route path="dashboard" element={<Dashboard />} />*/}

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<NoMatch />} />

      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href='/'>

            <div style={{width:36}}>
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                   width="36.000000pt" height="36.000000pt" viewBox="0 0 1280.000000 1280.000000"
                   preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                   fill="#000000" stroke="none">
                  <path d="M6319 9167 c-20 -8 -52 -23 -70 -35 -19 -12 -581 -569 -1250 -1239
-1340 -1341 -1254 -1247 -1254 -1376 0 -100 -11 -97 371 -97 l324 0 2 -1292
c3 -1203 4 -1296 20 -1331 28 -62 73 -111 130 -143 l53 -29 490 -3 c537 -3
548 -2 613 54 79 67 76 45 82 629 l5 520 23 45 c33 63 76 105 136 132 50 23
56 23 406 23 349 0 356 0 405 -23 63 -29 100 -64 133 -127 l27 -50 5 -520 c6
-584 3 -562 82 -629 65 -56 76 -57 613 -54 487 3 490 3 532 26 57 30 105 80
134 138 l24 49 3 1293 2 1292 324 0 c383 0 371 -3 371 97 -1 130 86 34 -1258
1380 -884 885 -1234 1229 -1270 1249 -59 32 -153 41 -208 21z"/>
                </g>
              </svg>

            </div>
            <span className="ml-3 text-xl">Classify</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center"></nav>
          <Link to='place-ad' className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Submit Listing
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </header>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App
