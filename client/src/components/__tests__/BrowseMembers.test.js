import React from 'react';
import axios from 'axios';
import { render, screen, waitForElementToBeRemoved } from '../../custom-render';
import BrowseMembers from '../../routes/BrowseMembers';
import { membersList } from "../makeMembers";


describe("<BrowseMembers />", () => {
    it("fetches from the API in the <BrowseMembers /> component", async () => {
        render(<BrowseMembers />)
        await waitForElementToBeRemoved(() => screen.getByText(/Fetching Members/i))
        
        expect(axios.get).toHaveBeenCalledTimes(1)
        membersList.slice(0,15).forEach((item) => {
            expect(screen.getByText(item.title)).toBeInTheDocument();
        })
    })
})