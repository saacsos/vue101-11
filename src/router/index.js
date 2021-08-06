import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import NumberList from "@/views/NumberList"
import PokemonList from "@/views/PokemonList"
import Pokedex from "@/views/pokedex/Index"
import PokedexCreate from "@/views/pokedex/Create"
import Login from "@/views/auth/Login"
import Logout from "@/views/auth/Logout"
import Register from "@/views/auth/Register"
import PokedexEdit from "@/views/pokedex/Edit"

Vue.use(VueRouter)

const routes = [
  {
    path: "/pokedex/:id/edit",
    name: "PokedexEdit",
    component: PokedexEdit,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/numbers",
    name: "NumberList",
    component: NumberList,
  },
  {
    path: "/pokemons",
    name: "PokemonList",
    component: PokemonList,
  },
  {
    path: "/pokedex",
    name: "Pokedex",
    component: Pokedex,
  },
  {
    path: "/pokedex/create",
    name: "PokedexCreate",
    component: PokedexCreate,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
