import repository from './repository.js';

export default {
    async upload(req, res) {
        const file = req.file;
        res.send(file);
    },
    async download(req, res) {
        const id = req.params.id;
        const item = await repository.show(id);

        if (item == null) {
            return res.send({"result": "fail"});
        }

        res.download(item.file_path, item.original_name, (err) => {
            if (err) {
                res.send({"result": "fail", "message": err.message});
            }
        });

    }
}