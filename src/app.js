const express = require('express');
const loginRouter = require('./routes/login.router');
const userRouter = require('./routes/user.router');
const categoriesRouter = require('./routes/categories.router');
const postRouter = require('./routes/post.router');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...

app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoriesRouter);
app.use('/post', postRouter);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
