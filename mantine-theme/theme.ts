import { createTheme, MantineColorsTuple } from '@mantine/core';

const yellowColors: MantineColorsTuple = [
  '#fdfce5',
  '#f8f6d3',
  '#f0ecaa',
  '#e7e17c',
  '#e0d957',
  '#dbd33e',
  '#d9d02f',
  '#c0b820',
  '#aaa316',
  '#938c03',
];

const theme = createTheme({
  colors: { yellowColors },
  fontFamily: 'Rubik',
});

export { theme };
