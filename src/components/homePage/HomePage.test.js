import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Alert, AlertTitle } from "@material-ui/lab";

import HomePage from "./HomePage";

Enzyme.configure({ adapter: new Adapter() });

describe("Home Page", () => {
  it("Title", () => {
    const wrapper = shallow(<HomePage />);
    const h1 = wrapper.find("div h1");
    expect(h1.text()).toBe("Home Page");
  });

  it("Alert Title", () => {
    const wrapper = shallow(<HomePage />);
    const title = wrapper.find(AlertTitle).text();
    // const title = wrapper.find(AlertTitle).childAt(0).text(); // Another way to do what above do
    expect(title).toBe("Info");
  });

  it("Alert Text", () => {
    const wrapper = shallow(<HomePage />);
    const text = wrapper.find(Alert).childAt(1).text();
    expect(text).toBe("This app still in construction...");
  });
});
