// @deno-types="npm:@types/express@^4"
import express from 'npm:express@4';

const app = express();
const port = 3000;

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
