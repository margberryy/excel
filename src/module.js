console.log('module');
async function start() {
  return await Promise.resolve('asinc working');
}
start().then(console.log);
