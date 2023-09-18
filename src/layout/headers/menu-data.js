const menu_data = [
  {
    id: 1,
    title: "Home",
    link: "/",
    has_dropdown: false,
    sub_menus: [
    ],
  },
  {
    id: 2,
    title: "About Us",
    link: "/about",
    has_dropdown: false,
    sub_menus: [
    ],
  },
  {
    id: 3,
    title: "Our Services",
    link: "/services",
    has_dropdown: true,
    sub_menus: [
      { link: "/course-grid", title: "Our Online Courses" },
      { link: "/materials", title: "Our Materials and Guides" },
    ],
  },
  {
    id: 4,
    title: "Testimonials",
    link: "/testimonials",
    has_dropdown: false,
    sub_menus: [
    ],
  },
  {
    id: 5,
    title: "FAQ",
    link: "/faq",
    has_dropdown: false,
    sub_menus: [
    ],
  },
  {
    id: 6,
    title: "Contact",
    link: "/contact",
    has_dropdown: false,
    sub_menus: [
    ],
  },
  
];
export default menu_data;
