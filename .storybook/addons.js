import '@storybook/addon-actions/register';
import '@storybook/addon-links/register';
import '@storybook/addon-knobs/register';
import '@storybook/addon-notes/register';
import { registerDsm } from '@invisionapp/dsm-storybook/register';

registerDsm(process.env.STORYBOOK_DSM);
