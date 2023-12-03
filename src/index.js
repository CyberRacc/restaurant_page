import { loadHomePage } from "./components/home";
import { createMenu } from "./components/menu";
import { enableNavClicks } from "./components/navClicks";
import logo from './assets/images/fat_cat_logo.png';
import './styles/global_style.css';
import './styles/footer.css';
import './styles/header_nav.css';
import './styles/page_content.css';


document.getElementById('logo').src = logo;


loadHomePage();
createMenu();
enableNavClicks();