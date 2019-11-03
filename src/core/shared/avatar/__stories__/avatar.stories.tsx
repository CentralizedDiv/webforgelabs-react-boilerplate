import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
// import * as notes from './doc.md';
import STAvatar from '../';

storiesOf('Core/Avatar', module)
  .addDecorator(withKnobs)
  // .addParameters({
  //   notes,
  // })
  .add('Avatar with label and chevron', () => {
    const content = text('Avatar Content', 'SC');
    const label = text('Avatar Label', 'Some Content');
    const chevron = boolean('chevron', true);
    return (
      <STAvatar
        label={label}
        chevron={chevron}
        onClick={action('button-click')}
      >
        {content}
      </STAvatar>
    );
  });
