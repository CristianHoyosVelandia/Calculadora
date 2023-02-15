<template>
  <br>

  <li class="menu">
    <router-link to="/" class="dropdown-toggle" @click="toggleMobileMenu">
      <div class=""> 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <span> Home </span>
      </div>
    </router-link>
  </li>

</template>

<script setup>
  import { onMounted } from 'vue';
  import feather from 'feather-icons';

  onMounted(() => {
    feather.replace();
  });

  const toggleMobileMenu = () => {
    if (window.innerWidth < 991) {
        store.commit('toggleSideBar', !store.state.is_show_sidebar);
    }
  };
</script>