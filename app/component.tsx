/// <reference path="../typings/react/react-global.d.ts"/>
import React = require('react');

interface HelloProps extends React.Props<any> {
    name : string;
}

class Hello extends React.Component<HelloProps, any> {
    render() {
        return <div>Hello {this.props.name}</div>;
    }
}

export = Hello
