import path from 'path';
import fs from 'fs';
import Images from '../models/image-model.mjs';
import formidable from 'formidable';

const __dirname = path.resolve(path.dirname(''));

const getAllImages = (req, res) => {
    const imagePath = path.join(__dirname, 'uploads');
    const data = [];
    fs.readdir(imagePath, (err, files) => {
        if (err) {
            res.status(401).json({
                error: 'error reading upload file'
            })
        }
        const data = []

        files.forEach(file => {
            const title = file.split('.')[0];
            data.push({ title: title, path: __dirname + '/uploads/' + file })
        });
       return res.send(data);
    });
}

const uploadImage = (req, res, next) => {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
        const oldPath = files.image.path;
        const newPath = path.join(__dirname, 'uploads') + '/' + files.image.name;
        const rawData = fs.readFileSync(oldPath)
      
        fs.writeFile(newPath, rawData, (err) => {
            if(err) console.log(err)
            return res.send('Successfully uploaded')
        })
    })
}


export default {
    getAllImages,
    uploadImage
}