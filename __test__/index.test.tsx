import { render, screen } from "@testing-library/react";
import Home from "../src/pages/index";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

describe("Home", () => {
  it("should render the correct title", () => {
    const { getAllByRole } = render(<Home />);

    const title = getAllByRole("heading", { level: 1 })[0];
    expect(title).toHaveTextContent("Make your dream");
  });

  it("should render the Hero section", () => {
    render(<Home />);
    const heroSection = screen.getByTestId("hero-section");
    expect(heroSection).toBeInTheDocument();
  });
});
