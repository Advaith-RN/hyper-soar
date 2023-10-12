import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Server is up!');
});

const startServer = async () => {
    const port = process.env.PORT || 8080;

    app.listen(port, () => console.log('Server is running on port '+port));
}

startServer();