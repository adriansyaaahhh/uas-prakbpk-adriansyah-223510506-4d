<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-dark">
      <q-toolbar>
        <q-btn flat dense round icon="menu" @click="toggleLeftDrawer" aria-label="Toggle Left Drawer" />
        <q-toolbar-title>WEATHER</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" bordered class="drawer">
      <q-list>
        <q-item clickable v-ripple @click="navigateTo('cuaca')">
          <q-item-section>
            <q-item-label>CUACA</q-item-label>
          </q-item-section>
        </q-item>
        <router-link to="/tugas-list" class="nav-link" style="text-decoration: none;">
          <q-item clickable v-ripple @click="navigateTo('tugas')">
            <q-item-section>
              <q-item-label>DAFTAR TUGAS ADRIANSYAH</q-item-label>
            </q-item-section>
          </q-item>
        </router-link>
      </q-list>
    </q-drawer>

    <q-page-container class="q-pa-md">
      <q-page>
        <router-view></router-view>
      </q-page>
    </q-page-container>

    <q-footer class="bg-dark">
      <q-toolbar>
        <q-toolbar-title>&copy; 2024 Weather App</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      leftDrawerOpen: false,
    };
  },
  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
    navigateTo(route) {
      this.$router.push({ path: `/${route}` });
      this.leftDrawerOpen = false;
    },
  },
};
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  color: #333;
  text-align: center;
}

.drawer {
  background-color: #cdcdc0; 
}

.q-toolbar-title {
  font-size: 24px;
  font-weight: bold;
}

.q-pa-md {
  background-color: #5f6a6d; 
  
}

.nav-link {
  text-decoration: none;
  color: inherit;
  display: block;
}
</style>
