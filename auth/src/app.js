import {createApp} from 'vue'
import router from './router';
import AuthContent from './components/AuthContent';


const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

export default createApp(AuthContent).use(router).mount(rootElement);;