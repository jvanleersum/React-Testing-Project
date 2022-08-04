import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    render(<Greeting />);
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders It\'s good to see you! as text if button is not clicked", () => {
    render(<Greeting />);
    const goodToSeeYouElement = screen.getByText("It's good to see you!");
    expect(goodToSeeYouElement).toBeInTheDocument();
  })
});
