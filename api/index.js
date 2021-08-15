const express = require('express');


const PORT = process.env.PORT || 8080;
const app = express();


app.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Origin',
    'http://localhost:3000'
  );

  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, X-WLTVA-Client-Platform, X-WLTVA-Client-Version'
  );
  next();
});

app.use(express.json());




app.listen(PORT, () => console.log(`server has been started on port ${PORT}, \n`, process));
