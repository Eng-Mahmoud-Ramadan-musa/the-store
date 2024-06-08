import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DescountView from "@/views/DescountView.vue";
import SmartPhones from "@/views/SmartPhones.vue";
import LaptopsView from "@/views/LaptopsView.vue";
import HuorsView from "@/views/HoursView.vue";
import MenView from "@/views/MenView.vue";
import WomenView from "@/views/WomenView.vue";
import ChildrenView from "@/views/ChildrenView.vue";
import ShopingView from "@/views/ShopingView.vue";
import LoginView from "@/views/LoginView.vue";
import SingupView from "@/views/SingupView.vue";
import SearchView from "@/views/SearchView.vue";
import ProductView from "@/views/ProductView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/desc",
    name: "desc",
    component: DescountView,
  },
  {
    path: "/phone",
    name: "phone",
    component: SmartPhones,
  },
  {
    path: "/laptops",
    name: "laptops",
    component: LaptopsView,
  },
  {
    path: "/huors",
    name: "huors",
    component: HuorsView,
  },
  {
    path: "/men",
    name: "men",
    component: MenView,
  },
  {
    path: "/women",
    name: "women",
    component: WomenView,
  },
  {
    path: "/children",
    name: "children",
    component: ChildrenView,
  },
  {
    path: "/shoping",
    name: "shoping",
    component: ShopingView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/singup",
    name: "singup",
    component: SingupView,
  },
  {
    path: "/search",
    name: "search",
    component: SearchView,
  },
  {
    path: "/product",
    name: "product",
    component: ProductView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
