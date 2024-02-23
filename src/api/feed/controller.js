export default {
    index: (req, res) => {
        res.send('피드 리스트');
    },
    store: (req, res) => {
        const body = req.body;
        res.send(body);
    },
    show: (req, res) => {
        const id = req.params.id;
        res.send(`피드 조회`);
    },
    update: (req, res) => {
        const id = req.params.id;
        res.send(`피드 수정`);
    },
    destroy: (req, res) => {
        const id = req.params.id;
        res.send(`피드 삭제`);
    },
}