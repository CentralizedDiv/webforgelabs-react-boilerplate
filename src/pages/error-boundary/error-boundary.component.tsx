// tslint:disable
import React from 'react';
import * as Sentry from '@sentry/browser';
import { SomethingWentWrong } from './something-went-wrong.container';

export class ErrorBoundary extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { errorInfo: null, eventId: null };
  }

  componentDidCatch(error: any, errorInfo: any) {
    Sentry.withScope(scope => {
      scope.setExtras(errorInfo);
      const eventId = Sentry.captureException(error);
      this.setState({ errorInfo, eventId });
    });
  }

  render() {
    if (this.state.errorInfo) {
      return <SomethingWentWrong eventId={this.state.eventId} />;
    }
    return this.props.children;
  }
}
