<template>
    <div>
        <!--  BEGIN NAVBAR  -->
        <div class="header-container fixed-top">
          <header class="header navbar navbar-expand-sm">

            <!-- Branding -->
            <Branding tittle="MarketPlace"/>

            <!-- Sidebar Collapse / Toggle -->
            <div class="d-none horizontal-menu">
                <a href="javascript:void(0);" class="sidebarCollapse" data-placement="bottom" @click="$store.commit('toggleSideBar', !$store.state.is_show_sidebar)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-menu"
                  >
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                </a>
            </div>
          </header>
        </div>
        <!--  END NAVBAR  -->
    </div>
</template>

<script>
 
  
  import Branding         from './components/branding.vue';

  export default {
    components:{
      Branding,
    }
  }
</script>