import express from 'express';
import { Request, Response } from 'express';
import {fileURLToPath} from "url";
import path from "path";

const router = express.Router();

const _filename = fileURLToPath(import.meta.url);
const _dirName = path.dirname(_filename)

router.get('/', (req: Request, res: Response) => {
    console.log("get request to /");
    // send the html file to browser
    // the absolute path starts from C:, this is how node works
    // this is why we use path.dirname
    res.sendFile(_dirName+"/index.html");
});

router.post('/msg', (req: Request, res: Response) => {
    console.log(req.body);
    res.redirect('/');
})
export default router;