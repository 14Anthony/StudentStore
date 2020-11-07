import ProductList from "../components/productList";
import FormCard from "../components/FormCard";
import SignUp from "../pages/LoginHandler/signup";

export const AdminSideBar = [
  // {
  //   name: "Admin Console",
  //   id: "",
  //   resources: "<ProductList/>",
  // },
  {
    name: "Manage Profile",
    id: "1",
    main: () => <SignUp />,
  },
  {
    name: "View Product List",
    id: "ProductList",
    main: () => <ProductList />,
  },
  {
    name: "Add Product",
    id: "FormCard",
    main: () => <FormCard />,
  },
  // {
  //   name: "Remove Product",
  //   path: "/ADMIN",component:""
  // },
  {
    name: "Reports",
    id: "4",
    main: () => <h2>Home</h2>,
  },
];
export const UserSideBar = [
  {
    name: "User Console",
    id: "",
    main: () => <h2>Home</h2>,
  },
  {
    name: "Manage Profile",
    id: "",
    main: () => <h2>Home</h2>,
  },
  {
    name: "Payment Methods",
    id: "",
    main: () => <h2>Home</h2>,
  },
  {
    name: "Purchase History",
    path: "",
    component: "",
  },
];
