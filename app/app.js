import Vue from "nativescript-vue";
import App from "./components/App";
import Home from "./components/Home";
import DrawerContent from "./components/DrawerContent";
import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
import RadDataForm from "nativescript-ui-dataform/vue";
import RadListView from 'nativescript-ui-listview/vue';

Vue.use(RadListView);
    
Vue.use(RadDataForm);

Vue.use(RadSideDrawer);

Vue.registerElement(
  'CardView',
  () => require('@nstudio/nativescript-cardview').CardView
);

Vue.config.silent = (TNS_ENV === 'production');

new Vue({
    render (h) {
        return h(
          App,
          [
            h(DrawerContent, { slot: 'drawerContent' }),
            h(Home, { slot: 'mainContent' })
          ]
        )
      }
  }).$start();
