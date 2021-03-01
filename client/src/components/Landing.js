/* 
This component houses the landing "page".
Users should see 2 choices under the logo and subtitle.
One choice reveals a search bar where users can search for a specific member of congress.
The other choice brings users to a browsing page where they can filter the results to get to the specific member of congress.
*/

import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import { Transition } from '@headlessui/react'
import Search from './Search';
import Button from './Button';




const Landing = () => {
    const [view, setView] = useState(null)

    
    return (
            <Transition
            appear="true"
            show={true}
            unmount={true}
            enter="transition-opacity ease-linear duration-3s"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-3s"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            >
                <Transition.Child>
                    <div className="flex flex-col h-screen">
                    <div className="flex flex-col justify-start lg:justify-center lg:items-center lg:flex-row h-full p-5 lg:p-40 xl:p-58 lg:space-x-10">
                        <div className="order-2">
                            <h1>CongressBoss</h1>
                            <h3>Find Your Rep.</h3>
                            <div className="flex space-x-2 items-start">
                                {view !== "Search"
                                ?
                                <Button buttonText="Search" onClick={() => setView("Search") } />
                                :
                                <Search onOpen={view === "Search" ? true : false}/>
                                }
                                <Link className="block px-4 py-2 bg-gray-300 hover:bg-gray-600 hover:text-white rounded-md transition duration-300ms" to="/browseMembers">Browse</Link>
                            </div>
                        </div>
                        <div className="imageContainer">
                            <div className="h-full w-full min-h-full bg-center bg-no-repeat bg-cover rounded-xl" style={{ backgroundImage: "URL('https://source.unsplash.com/5-3pb2I4tiE')" }} alt="The United States Capitol"></div>
                            <div className="caption">The United States Capitol</div>
                        </div>
                    </div>
                    </div>
                </Transition.Child>
            </Transition>
    )
}

export default Landing