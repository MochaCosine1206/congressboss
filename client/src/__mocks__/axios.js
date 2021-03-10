import { membersList } from "../components/makeMembers";

export default {
  get: jest.fn().mockImplementation((url) => {
    switch (url) {
      case "https://jsonplaceholder.typicode.com/todos":
        return Promise.resolve({ data: membersList });
      default:
        throw new Error(`UNMATCHED URL: ${url}`);
    }
  }),
};