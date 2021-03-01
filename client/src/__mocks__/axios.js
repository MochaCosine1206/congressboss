import { membersList } from '../components/makeMembers';


module.exports = {
    get: jest.fn().mockImplementation((url) => {
        switch (url) {
            case "http://localhost:8000/apis/members/":
                return Promise.resolve({ data: membersList });
            default:
                throw Promise.reject(new Error('not found'))
        }
    }),
};