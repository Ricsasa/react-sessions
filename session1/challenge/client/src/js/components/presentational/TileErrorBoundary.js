import React, { Component } from "react";
import { DataTileStyled } from '../container/App.styled';

class TileErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = { hasErrors: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasErrors: true });    
  }

  render() {
    const { children } = this.props;
    const { hasErrors } = this.state;

    if (hasErrors) {
      return (
        <DataTileStyled error />
      );
    }

    return children;
  }
}

export { TileErrorBoundary };
