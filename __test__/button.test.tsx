import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import Button from "../src/components/Button";

describe("Button", () => {
  it("should render the correct text", () => {
    const { getByRole } = render(<Button>Hallo</Button>);
    const button = getByRole("button");
    expect(button).toHaveTextContent("Hallo");
  });

  it("should render the correct size", () => {
    const { getByRole } = render(<Button isLoading>Loading</Button>);
    const button = getByRole("button");

    expect(button).toHaveClass("cursor-wait");
  });

  it("should render the correct disabled", () => {
    const { getByRole } = render(<Button disabled>Disabled</Button>);
    const button = getByRole("button");

    expect(button).toBeDisabled();
  });

  it("should render the correct onClick", () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Button onClick={onClick}>Click</Button>);
    const button = getByRole("button");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
