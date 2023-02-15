<template>

    <li :key="props.subMenu.id">
        <router-link :to="props.subMenu.urlMenu" @click="toggleMobileMenu">
            {{ $t(props.subMenu.nameMenu) }}
        </router-link>
    </li>

</template>

<script setup>
    const props = defineProps({ 
        subMenu: { default: {
            id: '',
            nameMenu: '',
            urlMenu: '',
        }},
    });

    const toggleMobileMenu = () => {
        if (window.innerWidth < 991) {
            store.commit('toggleSideBar', !store.state.is_show_sidebar);
        }
    };
</script>
