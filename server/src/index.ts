import express, { Request, Response } from 'express';


interface User {
  id: number;
  name: string;
  email: string;
}

// Initialize Express app
const app = express();
app.use(express.json());


app.get('/users/:id', (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.id);

  // type checks
  if (isNaN(userId)) {
    res.status(400).send('Invalid user ID');
    return;
  }


  const user: User = {
    id: userId,
    name: 'John Doe',
    email: 'john@example.com',
  };

  res.json(user);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
