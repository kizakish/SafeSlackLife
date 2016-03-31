const https = require('https');

https.get('https://slack.com/api/chat.postMessage?token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX&channel=%23random&text=helloworld!!', (res) => {
  console.log('statusCode: ', res.statusCode);
  console.log('headers: ', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });

}).on('error', (e) => {
  console.error(e);
});
