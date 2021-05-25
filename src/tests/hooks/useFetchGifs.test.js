import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe("Tests into useFetchGifs.js", () => {
  test("should return initial state", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("One Punch Man")
    );
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });
  test("should return an array of images and loading false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("One Punch Man")
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toBe(15);
    expect(loading).toBe(false);
  });
});
