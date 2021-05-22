import { AddCategory } from "../../components/AddCategory";
import { shallow } from "enzyme";

describe("Tests into AddCategory.js", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("should show <AddCategory /> successfully", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("should change input text", () => {
    const input = wrapper.find("input");
    const value = "Hola Mundo";

    input.simulate("change", { target: { value } });
  });
  test(`shouldn't post the info`, () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });
  test(`should call setCategories and clear the input`, () => {
    const value = "Hola Mundo";

    wrapper.find("input").simulate("change", { target: { value } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).toHaveBeenCalled();
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
