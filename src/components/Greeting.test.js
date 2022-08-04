import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    render(<Greeting />);
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders It\'s good to see you! as text if button is NOT clicked", () => {
    render(<Greeting />);
    const goodToSeeYouElement = screen.getByText("It's good to see you!");
    expect(goodToSeeYouElement).toBeInTheDocument();
  })

  test("renders Changed! as text if button was clicked", () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)
    const changedElement = screen.getByText("Changed!");
    expect(changedElement).toBeInTheDocument();
  })

  test("does not render good to see you if button was clicked", () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)
    const goodToSeeYouElement = screen.queryByText("It's good to see you!");
    expect(goodToSeeYouElement).not.toBeInTheDocument();
  })

});
