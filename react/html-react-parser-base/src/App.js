import React, { Component } from 'react'
import parse, { attributesToProps } from 'html-react-parser';

export default class App extends Component {
  render() {
    const html = `
  <main class="prettify" style="background: #fff; text-align: center;" />
`;

    const options = {
      replace: domNode => {
        if (domNode.attribs && domNode.name === 'main') {
          const props = attributesToProps(domNode.attribs);
          return <div {...props} />;
        }
      }
    };
    return (
      parse(html, options)
    )
  }
}
