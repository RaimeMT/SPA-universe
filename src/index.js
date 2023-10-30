import { Router } from './router.js'

const router = new Router()
router.add("/", "/pages/home.html");
router.add("/universo", "/pages/universo.html");
router.add("/exploracao", "/pages/exploracao.html");

router.handle();

window.onpopstate = () => router.handle()
window.route = () => router.main()
