/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

import React from "react";
import ReactDOM from "react-dom";

import Button from "../src/Button";

class Demo extends React.Component {
  render() {
    return (
      <div>
        <header className="heading"><h1>Backstage Modal Demo</h1></header>

        <div className="content">
            <Button />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById("container"));
