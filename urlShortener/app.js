const connectDB = require('./database/mongoConnect');
const express = require('express');
const urlOperations = require('./database/urlEntryDB');
const path = require('path'); // Import the 'path' module
const port = 8080;

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Set the 'views' directory to the 'views' folder
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index', { finalURL: null }); // Render the EJS template
});

app.post('/', async (req, res) => {
    try {
        const urlToShorten = req.body['url'];

        await urlOperations.URLaddTable(urlToShorten);

        const url = await urlOperations.getSHORTurl(urlToShorten);

        let finalURL = '';
        if (url && url['shortURL']) {
            finalURL = url['shortURL'];
        }

        res.render('index', { finalURL }); // Render the EJS template
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/re/:shortendURL', (req, res) => {
    urlOperations.getSHORTurlObject(req.params['shortendURL']).then(originalURL => {
        res.redirect(originalURL['originalURL']);
    }).catch(error => {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    });
});

app.listen(port, () => {
    console.log(`Listening at : ${port}`);
});
