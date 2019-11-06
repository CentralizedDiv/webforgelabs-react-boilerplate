import { UUID } from './basic.models';

export const isAValidColor = (hexColor: string): boolean => /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hexColor);

export const getInitials = (name: string): string => {
  // tslint:disable-next-line: strict-type-predicates
  if (typeof name === 'string') {
    const splittedName = name.split(' ');
    if (splittedName.length === 2) {
      const firstLetter = splittedName[0].charAt(0).toUpperCase();
      const secondLetter = splittedName[1].charAt(0).toUpperCase();
      return `${firstLetter}${secondLetter}`;
    } else {
      return name.slice(0, 2).toUpperCase();
    }
  } else {
    return '';
  }
};

export const sleep = (ms: number): Promise<any> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const generateUUID = () => {
  let d = new Date().getTime();
  // tslint:disable-next-line: strict-type-predicates
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    d += performance.now();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    // tslint:disable-next-line:no-bitwise
    const random = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    // tslint:disable-next-line:no-bitwise
    return (c === 'x' ? random : (random & 0x3) | 0x8).toString(16);
  });
};

export function ColorManager(this: any): void {
  this.map = new Map();
  this.getColor = (id: UUID) => {
    if (this.map.has(id)) return this.map.get(id);

    return this.nextColorFromArray(id);
  };
  this.nextColorFromArray = (id: UUID) => {
    if (this.map.size < arrayOfColors.length) {
      const color = arrayOfColors[this.map.size];
      this.map.set(id, color);
      return color;
    } else {
      const color = arrayOfColors[this.map.size % arrayOfColors.length];
      this.map.set(id, color);
      return color;
    }
  };
  this.getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
}

const arrayOfColors: ReadonlyArray<UUID> = [
  '#00EAFF',
  '#AA00FF',
  '#FF7F00',
  '#0040FF',
  '#EDB9B9',
  '#E7E9B9',
  '#8F2323',
  '#23628F',
  '#8F6A23',
  '#4F8F23',
  '#000000',
  '#737373',
];

export const setCookie = (key: string, value: any) => {
  const newCookie = `${key}=${encodeURIComponent(JSON.stringify(value))};domain=${
    window.location.hostname === 'localhost' ? 'localhost' : '.domain'
  };path=/`;
  document.cookie = newCookie;
};

export function updateUrlQuerystring(key: string, value: string): void {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(key, value);
  window.history.pushState(null, '', window.location.pathname + '?' + searchParams.toString());
}
