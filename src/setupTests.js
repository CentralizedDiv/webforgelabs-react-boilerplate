import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: str => str }),
  withTranslation: () => component => component,
}));

jest.mock('config/i18n', () => ({}));
