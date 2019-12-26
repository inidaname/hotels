export function tokenGetter() {
  console.log(localStorage.getItem('token'));
  return localStorage.getItem('token');
}
