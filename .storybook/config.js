import React from 'react';
import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react/dist/client/preview';
import 'config/i18n';

// Automatically import all files ending in *.stories.tsx/.ts inside src
const req = require.context('../src', true, /\.stories\.ts|\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const withGlobalStyle = cb => <div style={{ margin: 10 }}>{cb()}</div>;

addDecorator(withGlobalStyle);
configure(loadStories, module);
