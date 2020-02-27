export function calculateDate(firstDate: any, secondDate: any) {
  const oneDay = 24 * 60 * 60 * 1000;
  return Math.round(Math.abs((firstDate - secondDate) / oneDay));
}
