import React, { useEffect, useContext } from 'react';
import axios from 'axios'
import { Transition } from '@headlessui/react'
import { AppContext } from '../context/AppContext'

const Search = ({ onOpen }) => {
    const { appData, appDispatch } = React.useContext(AppContext);
    useEffect(() => {
        axios.get("http://localhost:8000/apis/members").then((response) => {
            const { data } = response;
            appDispatch({ type: "LOAD_MEMBERS", membersList: data })
        })
    }, [appDispatch])
 return(
    <Transition
        show={onOpen}
        enter="transition-opacity ease-linear duration-3s"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-3s"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        >
            <div className="order-12">
                    <form className="flex space-x-5">
                        <input className="block min-w-max rounded-lg border-0 shadow-lg"  placeholder="search..." type="search"></input>
                        <div className="block bg-gray-300 rounded px-4 py-2">Submit</div>
                    </form>
            </div>
    </Transition>
 )
}

export default Search