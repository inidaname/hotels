export function calculateDate(firstDate: any, secondDate: any) {
  const oneDay = 24 * 60 * 60 * 1000;
  console.log(typeof firstDate);
  console.log(typeof secondDate);
  console.log(Math.round(Math.abs((firstDate - secondDate) / oneDay)))
  return Math.round(Math.abs((firstDate - secondDate) / oneDay));
}
