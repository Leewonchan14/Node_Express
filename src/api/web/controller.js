export default  {
    home: (req, res) => {
        res.send('Hello carrot market');
    },

    page: (req, res) => {
        const page = req.params.page;
        let content;

        switch (page) {
            case 'page':
                content = '이용 약관';
                break;
            case 'policy':
                content = '개인 정보 처리 방침';
                break;
        }

        res.render('page.hbs', { content });
    },

    sitemap: (req, res) => {
        res.send("sitemap");
    },
}
