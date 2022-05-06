import express from 'express' 
import cors from 'cors'
import { routes } from './router';
import bodyParser from 'body-parser'

const app = express();

app.use(cors({origin: '*',}));
app.use(bodyParser.json ({ limit: '900kb' }))
app.use(express.json());
app.use(routes)

app.listen(3333, () => {
    console.log('HTTP Server running');
});
