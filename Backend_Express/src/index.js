const express = require('express')
require('dotenv').config()
const app = express()

app.use(express.json())
app.set('PORT', process.env.PORT || 8000)

app.get('/', (req, res) => {
    res.json({
        message: 'Hello word'
    })
})

app.listen(app.get('PORT'), () => {
    console.log(`Server runing in http://localhost:${app.get('PORT')}`);
})
