const menu = [
  {
    title: "Home",
    icon: "home",
    link: "/",
  },
  {
    title: "About Us",
    icon: "info",
    link: "/about",
    children: [
      {
        title: "History",
        icon: "history",
        link: "/about/history",
      },
      {
        title: "Mission",
        icon: "flag",
        link: "/about/mission",
      },
    ],
  },
  {
    title: "Services",
    icon: "cogs",
    link: "/services",
    children: [
      {
        title: "Service 1",
        icon: "service1",
        link: "/services/service1",
      },
      {
        title: "Service 2",
        icon: "service2",
        link: "/services/service2",
        children: [
          {
            title: "Products",
            icon: "products",
            link: "/products",
          },
        ],
      },
    ],
  },
  {
    title: "Contact",
    icon: "contact",
    link: "/contact",
  },
];

export default menu;
