import axios from 'axios';
import { render, screen, waitForElementToBeRemoved, cleanup } from '../../custom-render';
import BrowseMembers from '../../routes/BrowseMembers';
import { membersList } from "../makeMembers";


test("good response", async () => {
    await axios.get.mockImplementation((url = "http://localhost:8000/apis/members/") => {
        switch (url) {
            case "http://localhost:8000/apis/members/":
                return Promise.resolve({ status: 200, data: membersList });
            default:
                throw Promise.reject(new Error('not found'))
        }
    })
    render(<BrowseMembers />)
    await waitForElementToBeRemoved(() => screen.getByText(/Fetching Members/i))
    membersList.slice(0, 15).forEach((member) => {
        expect(screen.getByText(`- ${member.title}`)).toBeInTheDocument();
    })
    cleanup()
    // ...
  });
  
