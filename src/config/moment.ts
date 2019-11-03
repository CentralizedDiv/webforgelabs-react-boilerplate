import moment, { LocaleSpecification } from 'moment';
import 'moment/locale/pt-br';
import 'moment/locale/es';

let locale = window.navigator.language.toLocaleLowerCase();
let specification: LocaleSpecification =  {
  relativeTime: {
    future : '%s',
    past : '%s ago',
    s : 'a few seconds',
    ss : '%d seconds',
    m : 'a minute',
    mm : '%d minutes',
    h : 'an hour',
    hh : '%d hours',
    d : 'a day',
    dd : '%d days',
    M : 'a month',
    MM : '%d months',
    y : 'a year',
    yy : '%d years'}
};

switch (locale) {
  case 'pt':
  case 'pt-br':
    specification = {
      relativeTime: {
        future : '%s',
        past : 'há %s',
        s : 'poucos segundos',
        ss : '%d segundos',
        m : 'um minuto',
        mm : '%d minutos',
        h : 'uma hora',
        hh : '%d horas',
        d : 'um dia',
        dd : '%d dias',
        M : 'um mês',
        MM : '%d meses',
        y : 'um ano',
        yy : '%d anos'
      }
    };
    locale = 'pt-br';
    break;
  case 'es':
    specification = {
      relativeTime: {
      future : '%s',
      past : 'hace %s',
      s : 'unos segundos',
      ss : '%d segundos',
      m : 'un minuto',
      mm : '%d minutos',
      h : 'una hora',
      hh : '%d horas',
      d : 'un día',
      dd : '%d días',
      M : 'un mes',
      MM : '%d meses',
      y : 'un año',
      yy : '%d años'}
    };
    break;
  default:
    locale = 'en';
}

moment.updateLocale(locale, specification);

