const prod = {
  backend_url: 'https://api.galdenysh.nomoredomainsclub.ru',
 };

 const dev = {
  backend_url: 'http://localhost:3001',
 };

 export const config = process.env.NODE_ENV === 'development' ? dev : prod;