import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'This is another joke'
        },
        {
            id: 3,
            title: 'Yet another joke',
            content: 'This is yet another joke'
        },
        {
            id: 4,
            title: 'Still another joke',
            content: 'This is still another joke'
        },
        {
            id: 5,
            title: 'Last joke',
            content: 'This is the last joke'
        },
    ];
    res.json(jokes); // Ensure the response is correctly formatted as JSON array
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});
