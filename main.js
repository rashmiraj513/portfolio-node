import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import routes from './routes/route.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

routes(app);

// Starts the server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
