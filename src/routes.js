import Home from './views/Home.vue';
import AlbumsTable from './views/AlbumsTable.vue';

export const routes = [
  { path: '', component: Home },
  { path: '/table', component: AlbumsTable }
];
