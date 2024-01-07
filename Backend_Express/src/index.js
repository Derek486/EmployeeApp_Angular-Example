const app = require('./app')

app.listen(app.get('PORT'), () => {
    console.log(`Server runing on http://localhost:${app.get('PORT')}`);
})
