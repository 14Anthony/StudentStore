import ProductList from "../components/productList";
import FormCard from "../components/FormCard";
import SignUp from "../pages/LoginHandler/signup";
import Report from "../components/Report"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  // faCoffee,
  faUserCircle,
  faListAlt,
  faEdit,
  faChartBar,
} from "@fortawesome/free-regular-svg-icons";

export const AdminSideBar = [
  // {
  //   name: "Admin Console",
  //   id: "",
  //   resources: "<ProductList/>",
  //    icon: faCoffee,
  // },
  {
    name: "Manage Profile",
    order: "s1",
    id: "1",
    main: () => <SignUp />,
    icon: faUserCircle,
  },
  {
    name: "View Products",
    order: "s2",
    id: "ProductList",
    main: () => <ProductList />,
    icon: faListAlt,
  },
  {
    name: "Add Product",
    order: "s3",
    id: "FormCard",
    main: () => <FormCard />,
    icon: faEdit,
  },
  // {
  //   name: "Remove Product",
  //    order: "",
  //    id: "",
  //   path: "/ADMIN",component:""
  //    icon: faCoffee,
  // },
  {
    name: "Reports",
    order: "s4",
    id: "4",
    main: () => <Report />,
    icon: faChartBar,
  },
];
export const UserSideBar = [
  {
    name: "User Console",
    order: "",
    id: "",
    main: () => <h2>Home</h2>,
    icon: faCoffee,
  },
  {
    name: "Manage Profile",
    order: "",
    id: "",
    main: () => <h2>Home</h2>,
    icon: faCoffee,
  },
  {
    name: "Payment Methods",
    order: "",
    id: "",
    main: () => <h2>Home</h2>,
    icon: faCoffee,
  },
  {
    // name: "Purchase History",
    // order: "",
    // path: "",
    // component: "",
    // icon: faCoffee,
  },
];
