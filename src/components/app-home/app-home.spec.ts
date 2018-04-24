import { TestWindow } from "@stencil/core/testing";
import { AppHome } from "./app-home";

describe("app", () => {
  it("should build", () => {
    expect(new AppHome()).toBeTruthy();
  });

  describe("rendering", () => {
    beforeEach(async () => {
      const renderOpts = {
        components: [AppHome],
        html: "<app-home></app-home>"
      };
      const window = new TestWindow();
      await window.load(renderOpts);
    });
  });
});
