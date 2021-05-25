import GifApp from "../GifApp";
import { shallow } from "enzyme";

describe("Tests into GifApp.js", () => {
  test("should match with the snapshoot", () => {
    const wrapper = shallow(<GifApp />);
    expect(wrapper).toMatchSnapshot();
  });
  test("should shown an array of categories", () => {
    const categories = ["One Punch Man", "One Piece"];
    const wrapper = shallow(<GifApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
