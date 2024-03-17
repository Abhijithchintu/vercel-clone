import fs from "fs";
import path from "path";

export const getAllFiles = (filepath: string) => {
    let result : string[] = []
    let currDirFilesAndFolders = fs.readdirSync(filepath)
    currDirFilesAndFolders.forEach(file => {
        const fullPath = path.join(filepath, file);
        if(fs.statSync(fullPath).isDirectory()){
            result = result.concat(getAllFiles(fullPath))
        }
        else{
            result.push(fullPath);
        }
    })
    return result
 }

 module.exports = {getAllFiles}