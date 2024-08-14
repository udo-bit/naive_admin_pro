import Workspace from "./workspace.ts";

const Home = () => import("~/pages/index.vue")

export default {
    Home,
    ...Workspace
}