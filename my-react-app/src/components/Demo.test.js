import { render, screen,fireEvent } from "@testing-library/react";
import Demo from "./Demo";

const mockData = [
    { id: 1, name: "mayur" },
    { id: 2, name: "bhushan" },
    { id: 3, name: "nitish" },
  ];

  describe('Test with mock Data',()=>{
   it('rende',()=>{
    const {getByTestId}=render(<Demo/>)
    expect(getByTestId('section')).toBeInTheDocument();
   })

   it('render props',()=>{
    render(<Demo name="mayur"/>)
    const container=document.getElementById('user')
    expect(container).toBeInTheDocument('mayur');
   })

  })