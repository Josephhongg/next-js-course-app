import StoriesCard from "@/components/StoriesCard";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

const stories = [
  {
    id: 1,
    title: "Test Story 1",
  },
  {
    id: 2,
    title: "Test Story 2",
  },
];

test("renders a card container element", () => {
  render(<StoriesCard data={stories} />);
  const cardContainer = screen.getByTestId("card-container");
  expect(cardContainer).toBeInTheDocument();
});

test("renders the title of each story in the card", () => {
  render(<StoriesCard data={stories} />);
  stories.forEach((story) => {
    const titleElement = screen.getByText(story.title);
    expect(titleElement).toBeInTheDocument();
  });
});
