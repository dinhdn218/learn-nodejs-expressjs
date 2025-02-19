const newsController = {
  // GET /news
  index(req, res) {
    return res.render("news", { currentRoute: "/news" });
  },

  // GET Detail /news/:slug
  detail(req, res) {
    return res.send(`News detail - ${req.params.slug}`);
  },
};

module.exports = newsController;
