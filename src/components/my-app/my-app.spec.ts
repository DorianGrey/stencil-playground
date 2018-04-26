import { TestWindow } from "@stencil/core/testing";
import { MyApp } from "./my-app";

describe("my-app", () => {
  it("should build", () => {
    expect(new MyApp()).toBeTruthy();
  });

  let element;
  let window: TestWindow;

  describe("rendering", () => {
    beforeEach(async () => {
      window = new TestWindow();
      element = await window.load({
        components: [MyApp],
        html: "<my-app></my-app>"
      });
    });

    it("should not render any content if there is not a match", async () => {
      await window.flush();
      expect(element.textContent).not.toEqual("");
    });
  });
});
