import { render, screen,fireEvent } from "@testing-library/react";
import TestWithMockData from "./TestWithMockData";
const mockData = [
  { id: 1, name: "mayur" },
  { id: 2, name: "bhushan" },
  { id: 3, name: "nitish" },
];
test("should render  Component", () => {
  const { getByTestId } = render(<TestWithMockData />);
  expect(getByTestId("section")).toBeInTheDocument();
});

test("should render with data", () => {
  render(<TestWithMockData data={mockData} />);
  const container = document.getElementById("record");
  expect(container).toBeInTheDocument("mayur");
});

test("should render Number of List", () => {
  render(<TestWithMockData data={mockData} />);
  const container = document.getElementById("record");
  mockData.forEach(items=>{
    expect(container).toBeInTheDocument(items.name);
  })
  
});

test('should  onclick add item',()=>{
  render(<TestWithMockData data={mockData}/>)
  const element=screen.getByTestId('addbtn');
  fireEvent.click(element)
})

test('should  visible false',()=>{
   const {getByText}=  render(<TestWithMockData flag={false}/>)
   let container=document.getElementById('test')
   expect(container).toBeNull()
  })
  test('should  visible true',()=>{
    render(<TestWithMockData toggleTextVisible={true}/>)
    const {getByText}=  render(<TestWithMockData flag={true}/>)
    let container=document.getElementById('test')
    expect(container).toBeInTheDocument('Test1')
  })

  test('should click button',()=>{
    render(<TestWithMockData />)
    let container=document.getElementById('btnClick')
    fireEvent.click(container)
  })