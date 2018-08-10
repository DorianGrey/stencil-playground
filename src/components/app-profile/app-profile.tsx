import { Component, Prop, State } from "@stencil/core";
import { MatchResults } from "@stencil/router";
import { Action, Store } from "@stencil/redux";

import { incrementVisitTime } from "../../state/visitTime/visitTime";

@Component({
  tag: "app-profile",
  styleUrl: "app-profile.scss",
  shadow: true
})
export class AppProfile {
  @Prop()
  match!: MatchResults;
  @Prop({ context: "store" })
  store!: Store;

  @State()
  visitTime = 0;
  incrementVisitTime!: Action;
  timeoutId = -1;

  componentWillLoad(): void {
    this.store.mapStateToProps(this, (state: any) => {
      return { visitTime: state.visitTime };
    });

    this.store.mapDispatchToProps(this, {
      incrementVisitTime
    });
  }

  componentDidLoad(): void {
    this.timeoutId = (setInterval(
      () => this.incrementVisitTime(),
      1000
    ) as any) as number;
  }

  componentDidUnload(): void {
    clearInterval(this.timeoutId);
  }

  render() {
    if (this.match && this.match.params.name) {
      return (
        <div class="app-profile">
          <p>
            Hello! My name is {this.match.params.name}. My name was passed in
            through a route param!
          </p>
          <p>You have been watching me for {this.visitTime} seconds for now!</p>
        </div>
      );
    } else {
      return "";
    }
  }
}
