module.exports = [
  {
    id: 1,
    title: "Pour les freelancers",
    menuList: [
      { name: "Parcourir les jobs", route: "/job-list-v11" },
      { name: "Parcourir les Catégories", route: "/job-list-v3" },
      { name: "Mon dashboard", route: "/candidates-dashboard/dashboard" },
      { name: "Job Alerts", route: "/candidates-dashboard/job-alerts" },
      {
        name: "Mes Bookmarks",
        route: "/candidates-dashboard/short-listed-jobs",
      },
    ],
  },
  {
    id: 2,
    title: "Pour les employeurs",
    menuList: [
      {
        name: "Parcourir les freelancers",
        route: "/candidates-list-v1",
      },
      { name: "Dashboard employeur", route: "/employers-dashboard/dashboard" },
      { name: "Publier un job", route: "/employers-dashboard/post-jobs" },
      { name: "Packs Job", route: "/employers-dashboard/packages" },
    ],
  },
  {
    id: 3,
    title: "Nous concernant",
    menuList: [
      { name: "A propos", route: "/about" },
      { name: "Conditions", route: "/terms" },
      { name: "Blogs", route: "/blog-list-v1" },
      { name: "Contact", route: "/contact" },
    ],
  },
  {
    id: 4,
    title: "Liens utiles",
    menuList: [
      { name: "Site Map", route: "/" },
      { name: "Conditions d'utilisation", route: "/terms" },
      { name: "Confidentialité", route: "/" },
      { name: "Securité", route: "/" },
      { name: "Accessibilité", route: "/" },
    ],
  },
];
