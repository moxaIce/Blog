import { createApp} from 'vue';
import Main from './main.vue';
let messageRoot: any  = null;

if (!messageRoot) {
    messageRoot = document.createElement('div');
    messageRoot.style.cssText = `position:fixed;
        z-index:99;
        width: 100%;
        top: 20px;
        display: flex;
        justify-content:center;`
}

document.body.appendChild(messageRoot);


const Message = {
    error: (content?: string) => {
        let vm = createApp(Main, {
            content
        }).mount(messageRoot)
        console.log(`vm is`, vm)
        setTimeout(() => {
            // vm.$destroy()
        }, 3000)
    }
}   


export default Message;