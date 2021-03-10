import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { AppContext } from '../context/AppContext'
import fetchPosts from '../services/fetchposts';



const BrowseMembers = () => {
    const [loading, setLoading] = useState(true);
    const { appData, appDispatch } = useContext(AppContext);


    useEffect(() => {
       const fetchMembers =  async () => {
           const members = await fetchPosts()
            appDispatch({ type: "LOAD_MEMBERS", membersList: members })
            setLoading(false);
       }
   
       fetchMembers()
    }, [])


    return (
        <div className="flex flex-col h-screen p-4">
            <div className="border-b-2 mb-5 sticky">
                <h1>CongressBoss</h1>
                <h3>Find Your Rep.</h3>
            </div>
            <div>
            {loading 
            ? 
            (
            <p>Fetching Members</p>
            ) : (
            <ul className="flex flex-col ">
                {appData.membersList.slice(0, 15).map((item) => {
                const { id, first_name, last_name, title, party, chamber } = item;
                return (
                    <li key={id} className="flex space-x-5 shadow mb-5 rounded-xl">
                    <div style={{ backgroundImage: `URL(https://theunitedstates.io/images/congress/225x275/${id}.jpg)`}} alt={`${first_name} ${last_name}`} className={`w-40 h-40 rounded-full bg-center bg-no-repeat bg-cover m-5 ring-4 ${party === "R" ? "ring-red-500" : party === "D" ? "ring-blue-500" : "ring-green-500"}`} />
                    <div className="p-10">
                        <Link to={`/member/${id}`} data-testid={id}>
                            {first_name} {last_name} - {title}
                        </Link>
                        <div>{chamber === "House" ? "U.S. House of Representatives" : "U.S. Senate"}</div>
                    </div>
                    </li>
                );
                })}
            </ul>
            )}

            </div>
        </div>
    )
}

export default BrowseMembers