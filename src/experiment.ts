const {hash} = require('./userUtil');

(async () => {
  const a = await hash('1234');
  const b = await hash('1234');
  const c = await hash('1234');

  console.log('a', a);
  console.log('b', b);
  console.log('c', c);
})();