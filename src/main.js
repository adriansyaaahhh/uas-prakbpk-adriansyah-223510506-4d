import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import { Quasar } from 'quasar';

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css';

// Import Quasar css
import 'quasar/src/css/index.sass';

// Create Vue application
const myApp = createApp(App);

// Use Quasar framework
myApp.use(Quasar, {
  plugins: {}, // Import Quasar plugins and add here
});

// Use Vue Router
myApp.use(router);

// Mount the application
myApp.mount('#app');
