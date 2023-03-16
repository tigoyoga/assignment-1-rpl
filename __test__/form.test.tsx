import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import SignUp from "../src/pages/form/components/SignUp";

describe("Form Page", () => {
  const setPage = jest.fn();
  it("should test when input is filled", () => {
    render(<SignUp setPage={setPage} />);

    const input = screen.getAllByRole("textbox")[0];
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "test" } });
    expect(input).toHaveValue("test");

    const input2 = screen.getAllByPlaceholderText("Enter Your Username")[0];
    expect(input2).toBeInTheDocument();
  });
});
