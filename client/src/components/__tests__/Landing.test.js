import { render, screen } from '../../custom-render';
import Landing from '../Landing';

describe("<Landing />", () => {
    it("Renders a Heading of CongressBoss in the <Landing /> Component.", () => {
      render(<Landing />)
      expect(screen.getByText(/CongressBoss/i)).toBeInTheDocument();
    });
    it("Renders a Subheading of 'Find Your Rep.' in the <Landing /> Component.", () => {
      render(<Landing />)
      expect(screen.getByText(/Find Your Rep./i)).toBeInTheDocument();
    });
  });