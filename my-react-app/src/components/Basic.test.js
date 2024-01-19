import { render, screen } from "@testing-library/react";
import Basic from "./Basic";

test("should render Test1", () => {
  render(<Basic />);
  const container = screen.getByText("Testing Example");
  expect(container).toBeInTheDocument();
});

test("should render Test2", () => {
  render(<Basic data={[]} displayList={true} />);
  //expect(container).toBeEmptyDOMElement()
  const data = document.getElementById("mydata");
  expect(data).toBeEmptyDOMElement();
});
test("should render Test3", () => {
  render(
    <Basic
      data={[
        { id: 1, first_name: "mayur", last_name: "Rajput", email: "email@123" },
      ]}
      displayList={true}
    />
  );
  //expect(container).toBeEmptyDOMElement()
  const data = document.getElementById("mydata"); 
  expect(data).toBeInTheDocument();
});
