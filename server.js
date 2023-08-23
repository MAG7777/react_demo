const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// const bodyParser = require('body-parser');
// const SECRET_KEY = 'your-secret-key'; 


// server.use(bodyParser.json());
server.use(middlewares);
server.use(jsonServer.bodyParser);

// server.post('/register', async (req, res) => {
//   try {
//     const { userName, email, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const users = router.db.get('users');
//     console.log('KKKKKKKKKKKK--->>>', users.users)


//     users.push({ userName, email, password: hashedPassword });
//     router.db.write();

//     const token = jwt.sign({ userName }, SECRET_KEY, { expiresIn: '1h' });
//     router.db.setState({ userName, email, password: hashedPassword });


//     console.log('User registered successfully:', { userName, email });
//     res.status(201).json({ message: 'User registered successfully', token });
//   } catch (error) {
//     console.error('Error registering user:', error);
//     res.status(500).json({ message: 'Error registering user' });
//   }
// });

// server.post('/login', async (req, res) => {
//   try {
//     const users = router.db.get('users');

//     const { userName, password } = req.body;
//     const user = users.find(user => user.userName === userName);
//     if (!user) {
//       return res.status(401).json({ message: 'User not found' });
//     }
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }
//     const token = jwt.sign({ userName }, SECRET_KEY, { expiresIn: '1h' });
//     res.status(200).json({ token });
//   } catch (error) {
//     res.status(500).json({ message: 'Error logging in' });
//   }
// });

server.get('/tasks/search', (req, res) => {
    const { q } = req.query;
    const tasks = router.db.get('tasks').value();
  
    if (q) {
      const results = tasks.filter(
        (task) =>
          task.title.toLowerCase().includes(q.toLowerCase()) ||
          task.description.toLowerCase().includes(q.toLowerCase())
      );
      res.json(results);
    } else {
      res.json([]);
    }
  });

server.delete('/tasks', (req, res) => {
    const { ids } = req.body;
    if (!ids || !Array.isArray(ids)) {
        return res.status(400).json({ error: 'Invalid request' });
    }

    router.db.get('tasks').remove((task) => ids.includes(task.id)).write();
    res.json({ message: 'Posts deleted successfully' });
});


// server.use(middlewares);
server.use(router);

const PORT = 3004;
server.listen(PORT, () => {
    console.log(`JSON Server is running on http://localhost:${PORT}`);
});