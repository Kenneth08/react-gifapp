import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Test into GifGridItem.js", () => {
  const title = "Is a title.";
  const url = "https://localhost.image.jpg";

  let wrapper = shallow(<GifGridItem title={title} url={url} />);
  beforeEach(() => {
    wrapper = shallow(<GifGridItem title={title} url={url} />);
  });
  test("should show the component successfully", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("should get title value", () => {
    const p = wrapper.find("p").text().trim();
    expect(p).toBe(title);
  });
  test("should get img props", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });
  test('should get className "animate__fadeIn"', () => {
    const div = wrapper.find("div");
    const className = div.prop("className");
    expect(className.includes("animate__fadeIn")).toBe(true);
  });
});
