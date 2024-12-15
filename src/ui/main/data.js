import { useTranslation } from "react-i18next";

export const useProjectData = () => {
  const { t } = useTranslation();

  return [
    {
      id: 1,
      image: "../../../assets//app_pictures/filter-book-app.webp",
      title: "Filter Book React",
      description: t("bookList"),
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
      image: "../../../assets/app_pictures/users_list.webp",
      title: "Users List ",
      description: t("userList"),
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
      id: 3,
      image: "../../../assets/app_pictures/responsive_layer.webp",
      title: "Responsive Css",
      description: t("responsiveWebpage"),
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
      id: 4,
      image: "../../../assets/app_pictures/calculator_app.webp",
      title: "Calculator",
      description: t("reactCalculator"),
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
      id: 5,
      image: "../../../assets/app_pictures/js_netflix.webp",
      title: "Netlifix Js",
      description: t("netflixClone"),
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
      id: 6,
      image: "../../../assets/app_pictures/my_tip_calulator.webp",
      title: "Tip Calculator",
      description: t("tipCalculator"),
      sourceCodeLink: {
        link: "https://github.com/Marcofa87/tip-calculator",
        source: "Source code",
      },
      demoLink: {
        link: "https://my-personal-tip-calculator.netlify.app/",
        demo: "Demo",
      },
    },
  ];
};
