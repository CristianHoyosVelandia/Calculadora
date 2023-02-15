<template>
  <ul class="navbar-item theme-brand flex-row text-center">
    <li class="nav-item theme-logo">
      <router-link to="/">
        <!-- <img src="@/assets/images/logo.png" id="logoImg" class="navbar-logo" alt="logo" /> -->
        Aca va una imagen
      </router-link>
    </li>
    <li class="nav-item theme-text">
      <router-link to="/" class="nav-link"> {{props.tittle}} </router-link>
    </li>
  </ul>
</template>

<style>
  #logoImg {
    width:    45px;
    height:   45px;
    margin:    0px 5px;
    padding: 3px;
  }
</style>

<script setup>

  // Para implementar cambios en el header, ir al archivo _navbar.scss linea 22
  const props = defineProps({ 
    tittle:           { default: ' ',                   type: String },
  });

</script>