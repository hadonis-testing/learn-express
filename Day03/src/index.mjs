import express from 'express';

let app = express();

const PORT = process.env.PORT || 3000;

const mockUsers = [
	{ id: 1, name: 'VuongLM3' },
	{ id: 2, name: 'HuyTD34' },
];

app.get('/', (req, res) => {
	res.status(200).send({ msg: 'VuongLM3' });
});

app.get('/api/v1/users', (req, res) => {
	res.status(200).send(mockUsers);
});

app.get('/api/v1/users/:id', (req, res) => {
	let id = parseInt(req.params.id);

	console.log('id', id);

	if (isNaN(id)) {
		res.status(400).send({ msg: 'Invalid id' });
		return;
	}

	const user = mockUsers.find((user) => user.id === id);

	if (!user) {
		return res.sendStatus(404);
	}

	res.status(200).send(user);
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
