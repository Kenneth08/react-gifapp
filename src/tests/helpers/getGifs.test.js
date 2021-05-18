import { getGifs } from "../../helpers/getGifs";

describe("Tests into getGifs.js", () => {
  test("should return an array with 15 elements", async () => {
    const gifs = await getGifs("One Punch Man");
    expect(gifs.length).toBe(15);
  });
  test("should return an array with 0 elements", async () => {
    const gifs = await getGifs("");
    expect(gifs.length).toBe(0);
  });
});
