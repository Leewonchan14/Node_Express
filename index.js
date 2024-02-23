import express from 'express';
import router from './src/router.js';
import bodyParser from 'body-parser';
import hbs from 'express-hbs';
import env from 'dotenv';

env.config();

// __dirname : 현재 파일의 경로
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// 서버 정적 파일 경로 설정
app.use(express.static('public'));

//handle bar 설정
app.engine('hbs', hbs.express4({
    defaultLayout: __dirname + '/views/layouts/web',
}));
app.set('views', 'hbs');
app.set('views', __dirname + '/views');


// url encoding의 확장을 할 수 있도록 extended:true라는 option을 설정
app.use(bodyParser.urlencoded({extended: true}));

// request body에 오는 데이터를 json 형식으로 변환
app.use(bodyParser.json());


app.use('/', router);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
