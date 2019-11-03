import * as numeral from 'numeral';
import 'numeral/locales/pt-br';
import 'numeral/locales/es';

let locale = window.navigator.language.toLocaleLowerCase();

switch (locale) {
  case 'pt':
  case 'pt-br':
    locale = 'pt-br';
    break;
  case 'es':
    locale = 'es';
    break;
  default:
    locale = 'en';
}

numeral.locale(locale);