/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express';
import multer from 'multer';
import cors from 'cors';

const app = express();

const upload = multer();
app.use(cors());

app.post('/clientes', upload.none(), (req, res) => {
  const { name } = req.body;
  console.log(name);
  res.send({ nombre: 'caballo', image: 'caja' });
});
app.get('/clientes', (req, res) => {
  res.send({ nombre: 'burrito', caja: 'burrita' });
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
