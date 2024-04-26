import Dropdown from "@/components/Dropdown/Dropdown";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

test("renders Dropdown component", () => {
  render(<Dropdown />);
  expect(screen.getByText("Select Story")).toBeInTheDocument();
});

test("opens and closes dropdown", () => {
  render(<Dropdown />);
  const title = screen.getByText("Select Story");
  expect(title).toBeInTheDocument();
  fireEvent.click(title);
});

test("renders Ask option", () => {
  render(<Dropdown />);
  const title = screen.getByText("Select Story");
  expect(title).toBeInTheDocument();
  fireEvent.click(title);
  const ask = screen.getByText("Ask");
  expect(ask).toBeInTheDocument();
});

test("renders Best option", () => {
  render(<Dropdown />);
  const title = screen.getByText("Select Story");
  expect(title).toBeInTheDocument();
  fireEvent.click(title);
  const best = screen.getByText("Best");
  expect(best).toBeInTheDocument();
});

test("renders Job option", () => {
  render(<Dropdown />);
  const title = screen.getByText("Select Story");
  expect(title).toBeInTheDocument();
  fireEvent.click(title);
  const job = screen.getByText("Job");
  expect(job).toBeInTheDocument();
});

test("renders New option", () => {
  render(<Dropdown />);
  const title = screen.getByText("Select Story");
  expect(title).toBeInTheDocument();
  fireEvent.click(title);
  const newOption = screen.getByText("New");
  expect(newOption).toBeInTheDocument();
});

test("renders Show option", () => {
  render(<Dropdown />);
  const title = screen.getByText("Select Story");
  expect(title).toBeInTheDocument();
  fireEvent.click(title);
  const show = screen.getByText("Show");
  expect(show).toBeInTheDocument();
});

test("renders Top option", () => {
  render(<Dropdown />);
  const title = screen.getByText("Select Story");
  expect(title).toBeInTheDocument();
  fireEvent.click(title);
  const top = screen.getByText("Top");
  expect(top).toBeInTheDocument();
});

test("renders Leaders option", () => {
  render(<Dropdown />);
  const title = screen.getByText("Select Story");
  expect(title).toBeInTheDocument();
  fireEvent.click(title);
  const leaders = screen.getByText("Leaders");
  expect(leaders).toBeInTheDocument();
});
