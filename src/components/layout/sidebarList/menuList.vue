<template>
    <!-- Catalogue -->
    <li :key="props.menu.id" class="menu">

        <router-link v-if="props.menu.urlMenu != ''" :to="props.menu.urlMenu" class="dropdown-toggle" @click="toggleMobileMenu">
            <div class="">
                <i :data-feather="props.menu.icon"></i>
                <span>{{ $t(props.menu.nameMenu) }}</span>
            </div>
        </router-link>

        <a v-else class="dropdown-toggle" data-bs-toggle="collapse" :data-bs-target="`#menu${props.menu.id}`" :aria-controls="`menu${props.menu.id}`" aria-expanded="false">
            <div class="">
                <i :data-feather="props.menu.icon"></i>
                <span> {{ $t(props.menu.nameMenu) }} </span>
            </div>
            <Arrow />
        </a>
        <ul :id="`menu${props.menu.id}`" class="collapse submenu list-unstyled" data-bs-parent="#sidebar">
            <subMenuList v-for="(subMenu, index) in props.subMenus" :key="index" :subMenu="subMenu" />
        </ul>
    </li>

</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import feather from 'feather-icons';
    import subMenuList from './subMenuList.vue';
    import Arrow from '@/components/layout/components/arrow.vue';

    onMounted(() => {
        feather.replace();
    });

    const props = defineProps({ 
        menu: {
            default: {
                id: '',
                nameMenu: '',
                urlMenu: '',
                icon: '',
            }
        },
        subMenus: {
            default: [{
                id: '',
                nameMenu: '',
                urlMenu: '',
            }]
        },
    });

    const toggleMobileMenu = () => {
        if (window.innerWidth < 991) {
            store.commit('toggleSideBar', !store.state.is_show_sidebar);
        }
    };
</script>
