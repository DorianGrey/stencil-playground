import { TestWindow } from "@stencil/core/testing";
import { AppProfile } from "./app-profile";

describe("app-profile", () => {
  it("should build", () => {
    expect(new AppProfile()).toBeTruthy();
  });

  describe("rendering", () => {
    let element;
    let window: TestWindow;

    beforeEach(async () => {
      window = new TestWindow();
      element = await window.load({
        components: [AppProfile],
        html: "<app-profile></app-profile>"
      });
    });

    it("should not render any content if there is not a match", async () => {
      await window.flush();
      expect(element.textContent).toEqual("");
    });

    it("should work with a name passed", async () => {
      await window.flush();
      element.match = {
        params: {
          name: "stencil"
        }
      };

      await window.flush();
      expect(element.textContent).toEqual(
        "Hello! My name is stencil. My name was passed in through a route param!You have been watching me for 0 seconds for now!"
      );
    });
  });
});
