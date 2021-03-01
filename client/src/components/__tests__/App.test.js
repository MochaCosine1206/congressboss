import { render } from '../../custom-render';
import Landing from '../Landing';

describe("<App />", () => {
  it("Renders <Landing /> component", () => {
    render(<Landing />)
  });
});
