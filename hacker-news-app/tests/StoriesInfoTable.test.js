import StoriesInfoTable from "@/components/StoriesInfoTable";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

const testData = [
  {
    by: "user1",
    kids: [123, 456],
    score: 10,
    time: 1630767915,
    title: "Test Story 1",
    type: "story",
    url: "https://test.com/story1",
  },
  {
    by: "user2",
    kids: [],
    score: 20,
    time: 1630767915,
    title: "Test Story 2",
    type: "story",
    url: "https://test.com/story2",
  },
];

test("renders StoriesInfoTable component", () => {
  render(<StoriesInfoTable data={testData} />);
  expect(screen.getByTestId("story-table")).toBeInTheDocument();
  expect(screen.getByText("Test Story 1")).toBeInTheDocument();
  expect(screen.getByText("Test Story 2")).toBeInTheDocument();
});

const testData2 = [
  {
    by: "user1",
    kids: [123, 456],
    score: 10,
    time: 1682091164,
    title: "Test Story 1",
    type: "story",
    url: "https://test.com/story1",
  },
];

test("formats time correctly", () => {
  render(<StoriesInfoTable data={testData2} />);
  const formattedTime = screen.getByText("22 Apr 2023, 03:32");
  expect(formattedTime).toBeInTheDocument();
});

const testData3 = [
  {
    by: "user1",
    kids: [],
    score: 10,
    time: 1630767915,
    title: "Test Story 1",
    type: "story",
    url: "https://test.com/story1",
  },
];

test('displays "N/A" if there are no kids', () => {
  render(<StoriesInfoTable data={testData3} />);
  const kidsCell = screen.getByText("N/A");
  expect(kidsCell).toBeInTheDocument();
});
