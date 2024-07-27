import { Button } from "./Button";

import { fireEvent, render, screen } from "@testing-library/react";

describe("Button Component", () => {
  // Positive Scenarios
  test("renders the Button with children", () => {
    render(<Button variant="primary">Click Me</Button>);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  test("renders the Button with left and right icons", () => {
    render(
      <Button
        variant="primary"
        leftIcon={<span>Left</span>}
        rightIcon={<span>Right</span>}
      >
        Click Me
      </Button>,
    );
    expect(screen.getByText("Left")).toBeInTheDocument();
    expect(screen.getByText("Right")).toBeInTheDocument();
  });

  test("renders the Button as disabled", () => {
    render(
      <Button variant="primary" disabled>
        Click Me
      </Button>,
    );
    expect(screen.getByText("Click Me")).toBeDisabled();
  });

  test("handles click event", () => {
    const handleClick = jest.fn();

    render(
      <Button variant="secondary" onClick={handleClick}>
        Click Me
      </Button>,
    );
    fireEvent.click(screen.getByText("Click Me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("applies the correct variant class", () => {
    render(<Button variant="secondary">Click Me</Button>);
    const buttonElement = screen.getByText("Click Me");
    expect(buttonElement).toHaveStyle("height:60px");
  });

  test("does not trigger click event when disabled", () => {
    const handleClick = jest.fn();
    render(
      <Button variant="tertiary" onClick={handleClick} disabled>
        Click Me
      </Button>,
    );
    fireEvent.click(screen.getByText("Click Me"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  test("applies outline style when outline prop is true", () => {
    render(
      <Button variant="secondary" outline>
        Click Me
      </Button>,
    );
    const buttonElement = screen.getByText("Click Me");
    expect(buttonElement).toHaveStyle("border: 2px solid");
  });
});

// Accessibility
describe("Button Accessibility", () => {
  test("button is accessible by role", () => {
    //@ts-ignore
    render(<Button>Accessible Button</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("button has accessible name", () => {
    //@ts-ignore
    render(
      <Button variant="secondary" aria-label="Custom Accessible Name">
        Accessible Button
      </Button>,
    );
    expect(screen.getByLabelText("Custom Accessible Name")).toBeInTheDocument();
  });
});
