import LeadersTable from "@/components/LeadersTable";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

const testData = [
  {
    about: "About 1",
    created: "2022-04-01",
    id: "user1",
    karma: 100,
    submitted: [123, 456, 789],
  },
  {
    about: "About 2",
    created: "2022-04-02",
    id: "user2",
    karma: 200,
    submitted: [111, 222, 333],
  },
];

test("renders a table with headers and data", () => {
  render(<LeadersTable data={testData} />);

  // Check for table headers
  expect(screen.getByText("About")).toBeInTheDocument();
  expect(screen.getByText("Created")).toBeInTheDocument();
  expect(screen.getByText("Id")).toBeInTheDocument();
  expect(screen.getByText("Karma")).toBeInTheDocument();
  expect(screen.getByText("Submitted")).toBeInTheDocument();

  // Check for table data
  expect(screen.getByText("About 1")).toBeInTheDocument();
  expect(screen.getByText("2022-04-01")).toBeInTheDocument();
  expect(screen.getByText("user1")).toBeInTheDocument();
  expect(screen.getByText("100")).toBeInTheDocument();
});
