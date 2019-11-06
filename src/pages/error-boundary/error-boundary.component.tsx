// tslint:disable
import React from 'react';
import { SomethingWentWrong } from './something-went-wrong.container';

export class ErrorBoundary extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { errorInfo: null, eventId: null };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.errorInfo) {
      return <SomethingWentWrong eventId={this.state.eventId} />;
    }
    return this.props.children;
  }
}
