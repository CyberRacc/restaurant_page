import { loadHomePage } from "./components/home";
import { createMenu } from "./components/menu";
import logo from './assets/images/fat_cat_logo.png';
import './styles/style.css';


document.getElementById('logo').src = logo;


loadHomePage();
createMenu();