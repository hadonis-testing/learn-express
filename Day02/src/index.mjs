import express from 'express';

let app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.status(200).send({ msg: 'VuongLM3' });
});

app.get('/api/v1/users', (req, res) => {
	res.status(200).send([
		{ id: 1, name: 'VuongLM3' },
		{ id: 2, name: 'HuyTD34' },
	]);
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
