<template>
  <br>

  <li class="menu">
    <router-link to="/" class="dropdown-toggle" @click="toggleMobileMenu">
      <div class=""> 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <span>{{ $t('Home') }}</span>
      </div>
    </router-link>
  </li>

  <li class="menu">
    <router-link to="/Reports" class="dropdown-toggle" @click="toggleMobileMenu">
      <div class=""> 
        <fa :icon="['fas', 'book']" class="feather feather-airplay"> </fa> 
        <span>{{ $t('Reports') }}</span>
      </div>
    </router-link>
  </li>

  <li class="menu">
    <router-link to="/Shops" class="dropdown-toggle" @click="toggleMobileMenu">
      <div class=""> 
        <i data-feather="bookmark"></i>
        <span>{{ $t('Shops') }}</span>
      </div>
    </router-link>
  </li>

  <br>
  <p> {{$t('OTHERS')}}</p>

  <li class="menu">
    <router-link to="/Profile" class="dropdown-toggle" @click="toggleMobileMenu">
      <div class=""> 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        <span>{{ $t('Profile') }}</span>
      </div>
    </router-link>
  </li>

  <li class="menu">
    <a class="dropdown-toggle"  data-bs-toggle="modal" data-bs-target="#modalLogout">
      <div class=""> 
        <fa :icon="['fas', 'right-to-bracket']" class="feather feather-airplay"> </fa> 
        <span>{{ $t('Log Out') }}</span>
      </div>
    </a>
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