import express from "express";
import cors from "cors";
import simpleGit from "simple-git"
import {generate} from "./utils"
import path from 'path';
import {getAllFiles} from "./flies"
import { uploadFile } from "./aws";

const app = express();

app.use(cors())
app.use(express.json()) //for post req body access , we need this

app.post('/deploy', async (req, res) => {
    const giturl = req.body.giturl
    const id = generate()
    await simpleGit().clone(giturl, path.join(__dirname, `output/${id}`))
    console.log('heyy')
    const allFiles = getAllFiles(path.join(__dirname, `output/${id}`))
    allFiles.forEach(async file => {
        await uploadFile(file.slice(__dirname.length+1), file)
    })
    res.json({
        res: allFiles
    })
})
app.listen(3000, () => {console.log("listening on port : 3000")});