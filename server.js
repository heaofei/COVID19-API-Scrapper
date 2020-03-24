const AppServer = require('./bin/app/app');
const appServer = new AppServer();
const port = 3000;

appServer.app.listen(port, () => {
    console.log(`Your app running in port ${port}`)
})