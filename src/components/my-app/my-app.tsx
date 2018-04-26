import { Component, Prop } from "@stencil/core";
import { Store } from "@stencil/redux";

import { configureStore } from "../../state/store";

@Component({
  tag: "my-app",
  styleUrl: "my-app.scss"
})
export class MyApp {
  @Prop({ context: "store" })
  store!: Store;

  componentWillLoad(): void {
    this.store.setStore(configureStore());
  }

  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route url="/" component="app-home" exact={true} />
            <stencil-route url="/profile/:name" component="app-profile" />
          </stencil-router>
        </main>
      </div>
    );
  }
}
