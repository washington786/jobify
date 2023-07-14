npm i express-async-errors validator http-status-codes jsonwebtoken mongoose express bcryptjs nodemailer nodemailer-sendgrid-transport

cors
dotenv gitignore

stats - route for interviews and applications

//**** connecting front-end and back-end ***//
npm i concurrently --save-dev

Scripts: 
"start": "concurrently --kill-others-on-fail \"npm run server\" \"npm run client\" "

client

app-server/app.js
/Users/user/Desktop/projects/jobify/app-server/package.json

cd ../client && npm start --ignore client
npm start --prefix client

//merging both servers
npm i cors


//proxy:
~on production the server will serve express static
in client package.json
~add proxy:
"proxy":  "http://localhost:9090"


//install morgan
app.use(morgan('dev'))