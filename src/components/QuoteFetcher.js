import React, { Component } from "react";

class QuoteFetcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      quote: ""
    };
  }
  refresh = () => {
    window.location.reload();
  };
  componentDidMount() {
    fetch("http://quotes.rest/qod.json")
      .then(response => response.json())
      .then(data => this.setState({ quote: data.contents.quotes[0].quote }));
  }

  render() {
    return <div>{this.state.quote}</div>;
  }
}

export default QuoteFetcher;
