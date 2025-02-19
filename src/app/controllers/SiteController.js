const siteController = {
  // GET /
  home(req, res) {
    return res.render("home", { currentRoute: "/" });
  },

  // GET AND POST /search
  search(req, res) {
    if (req.method === "POST") {
      return res.send("POST SEARCH");
    }
    return res.render("search", { currentRoute: "/search" });
  },
};

module.exports = siteController;
