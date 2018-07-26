import React from "react";

import Header from "./header";

class Resources extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Secret</h1>
        <ol>
          <li>High order Component</li>
          <li>i m hiding myself on signed out</li>
        </ol>
      </div>
    );
  }
}
export default Resources;
