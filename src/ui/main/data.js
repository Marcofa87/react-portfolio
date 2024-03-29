import { useTranslation } from "react-i18next";

export const useProjectData = () => {
  const { t } = useTranslation();

  const projectData = [
    {
      id: 1,
      image: "../../../assets//app_pictures/filter-book-app.webp",
      title: "Filter Book React",
      description: t("project1"),
      sourceCodeLink: {
        link: "https://github.com/Marcofa87/filter-book-app-react",
        source: "Source code",
      },
      demoLink: {
        link: "https://book-table-app-react.netlify.app/",
        demo: "Demo",
      },
    },
    {
      id: 2,
      image: "../../../assets/app_pictures/dashboard.webp",
      title: "Dashboard Inventory",
      description: t("project2"),
      sourceCodeLink: {
        link: "https://github.com/Marcofa87/inventory-dashboard",
        source: "Source code",
      },
      demoLink: {
        link: "https://inventory-dashboard-routing.netlify.app/",
        demo: "Demo",
      },
    },
    {
      id: 3,
      image: "../../../assets/app_pictures/users_list.webp",
      title: "Users List ",
      description: t("project3"),
      sourceCodeLink: {
        link: "https://github.com/Marcofa87/Users-List",
        source: "Source code",
      },
      demoLink: {
        link: "https://user-lists-react.netlify.app/",
        demo: "Demo",
      },
    },
    {
      id: 4,
      image: "../../../assets/app_pictures/my_tip_calulator.webp",
      title: "Tip Calculator",
      description: t("project4"),
      sourceCodeLink: {
        link: "https://github.com/Marcofa87/tip-calculator",
        source: "Source code",
      },
      demoLink: {
        link: "https://my-personal-tip-calculator.netlify.app/",
        demo: "Demo",
      },
    },
    {
      id: 5,
      image: "../../../assets/app_pictures/responsive_layer.webp",
      title: "Responsive Css",
      description: t("project5"),
      sourceCodeLink: {
        link: "https://github.com/Marcofa87/ResponsiveWeb",
        source: "Source code",
      },
      demoLink: {
        link: "https://responiveweb.netlify.app/",
        demo: "Demo",
      },
    },
    {
      id: 6,
      image: "../../../assets/app_pictures/calculator_app.webp",
      title: "Calculator",
      description: t("project6"),
      sourceCodeLink: {
        link: "https://github.com/Marcofa87/react-calculator-app",
        source: "Source code",
      },
      demoLink: {
        link: "https://react-responsive-calculator-app.netlify.app/",
        demo: "Demo",
      },
    },
    {
      id: 7,
      image: "../../../assets/app_pictures/master_crud_detail.webp",
      title: "Master Crud Detail",
      description: t("project7"),
      sourceCodeLink: {
        link: "https://github.com/Marcofa87/Master-Detail",
        source: "Source code",
      },
      demoLink: {
        link: "https://master-detail-angular.netlify.app/",
        demo: "Demo",
      },
    },
    {
      id: 8,
      image: "../../../assets/app_pictures/text_expander.webp",
      title: "Text expander",
      description: t("project8"),
      sourceCodeLink: {
        link: "https://github.com/Marcofa87/Text-expander",
        source: "Source code",
      },
      demoLink: {
        link: "https://my-text-expander.netlify.app/",
        demo: "Demo",
      },
    },
    {
      id: 9,
      image: "../../../assets/app_pictures/js_netflix.webp",
      title: "Netlifix Js",
      description: t("project9"),
      sourceCodeLink: {
        link: "https://github.com/Marcofa87/Marcofa87-Netflix-Clone",
        source: "Source code",
      },
      demoLink: {
        link: "https://my-movie-appjs.netlify.app/",
        demo: "Demo",
      },
    },
    {
      id: 10,
      image: "",
      title: "Test",
      description: "test",
      sourceCodeLink: {
        link: "https://github.com/Marcofa87/Marcofa87-Netflix-Clone",
        source: "Source code",
      },
      demoLink: {
        link: "https://js-netflix.netlify.app/",
        demo: "Demo",
      },
    },
  ];

  return projectData;
};
