<template>
    <br />

    <li class="menu">
        <router-link to="/" class="dropdown-toggle" @click="toggleMobileMenu">
            <div class="">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-home"
                >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span>{{ $t('Dashboard') }}</span>
            </div>
        </router-link>
    </li>

    <br />
    <p>{{ $t('NEW MENU') }}</p>
    <br />

    <!-- New menu -->
    <menuList v-for="(menu, index) in menus" :key="index" :menu="menu" :sub-menus="subMenus.filter(item => item.idMenu == menu.id)"/>

    <br />
    <p>{{ $t('SALES AND BALANCE') }}</p>
    <br />

    <!-- Pedidos -->
    <li class="menu">
        <a class="dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#Params" aria-controls="Params" aria-expanded="false">
            <div class="">
                <i data-feather="truck"></i>
                <span> {{ $t('Orders') }} </span>
            </div>
            <Arrow />
        </a>
        <ul id="Params" class="collapse submenu list-unstyled" data-bs-parent="#sidebar">
            <li>
                <router-link to="/" @click="toggleMobileMenu"> Pedidos </router-link>
            </li>
            <li>
                <router-link to="/index2" @click="toggleMobileMenu"> Facturas </router-link>
            </li>
            <li>
                <router-link to="/index2" @click="toggleMobileMenu"> Notas de Crédito </router-link>
            </li>
            <li>
                <router-link to="/index2" @click="toggleMobileMenu"> Albaranes de entrega </router-link>
            </li>
            <li>
                <router-link to="/index2" @click="toggleMobileMenu"> Carros de Compra </router-link>
            </li>
        </ul>
    </li>

    <!-- Catalogue -->
    <li class="menu">
        <a class="dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#Catalogue" aria-controls="Catalogue" aria-expanded="false">
            <div class="">
                <i data-feather="shopping-bag"></i>
                <span> {{ $t('Catalogue') }} </span>
            </div>
            <Arrow />
        </a>
        <ul id="Catalogue" class="collapse submenu list-unstyled" data-bs-parent="#sidebar">
            <li>
                <router-link to="/Products" @click="toggleMobileMenu">
                    {{ $t('Products') }}
                </router-link>
            </li>
            <li>
                <router-link to="/index2" @click="toggleMobileMenu">
                    {{ $t('Categories') }}
                </router-link>
            </li>
            <li>
                <router-link to="/index2" @click="toggleMobileMenu">
                    {{ $t('Discounts') }}
                </router-link>
            </li>
        </ul>
    </li>

    <!-- Customer Service -->
    <li class="menu">
        <router-link to="/Orders" class="dropdown-toggle" @click="toggleMobileMenu">
            <div class="">
                <i data-feather="message-square"></i>
                <span>{{ $t('Customer Service') }}</span>
            </div>
        </router-link>
    </li>

    <!-- Customers -->
    <li class="menu">
        <a class="dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#Customers" aria-controls="Customers" aria-expanded="false">
            <div class="">
                <i data-feather="shopping-bag"></i>
                <span> {{ $t('Shops') }} </span>
            </div>
            <Arrow />
        </a>
        <ul id="Customers" class="collapse submenu list-unstyled" data-bs-parent="#sidebar">
            <li>
                <router-link to="/Shops" @click="toggleMobileMenu">
                    {{ $t('Shops') }}
                </router-link>
            </li>
            <li>
                <router-link to="/index2" @click="toggleMobileMenu">
                    {{ $t('Address') }}
                </router-link>
            </li>
        </ul>
    </li>

    <!-- Stadistics -->
    <li class="menu">
        <a class="dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#Stadistics" aria-controls="Stadistics" aria-expanded="false">
            <div class="">
                <i data-feather="bar-chart-2"></i>
                <span> {{ $t('Stadistics') }} </span>
            </div>
            <Arrow />
        </a>
        <ul id="Stadistics" class="collapse submenu list-unstyled" data-bs-parent="#sidebar">
            <li>
                <router-link to="/" @click="toggleMobileMenu"> Pedidos </router-link>
            </li>
            <li>
                <router-link to="/index2" @click="toggleMobileMenu"> Facturas </router-link>
            </li>
            <li>
                <router-link to="/index2" @click="toggleMobileMenu"> Notas de Crédito </router-link>
            </li>
            <li>
                <router-link to="/index2" @click="toggleMobileMenu"> Albaranes de entrega </router-link>
            </li>
            <li>
                <router-link to="/index2" @click="toggleMobileMenu"> Carros de Compra </router-link>
            </li>
        </ul>
    </li>

    <li class="menu">
        <router-link to="/Reports" class="dropdown-toggle" @click="toggleMobileMenu">
            <div class="">
                <i data-feather="book"></i>
                <span>{{ $t('Reports') }}</span>
            </div>
        </router-link>
    </li>

    <br />
    <p>{{ $t('INVENTORY AND PRODUCTS') }}</p>
    <br />
    <li class="menu">
        <router-link to="/testemit" class="dropdown-toggle" @click="toggleMobileMenu">
            <div class="">
                <i data-feather="box"></i>
                <span>{{ $t('Products') }}</span>
            </div>
        </router-link>
    </li>

    <li class="menu">
        <router-link to="/Reports" class="dropdown-toggle" @click="toggleMobileMenu">
            <div class="">
                <i data-feather="shopping-bag"></i>
                <span>{{ $t('Inventory') }}</span>
            </div>
        </router-link>
    </li>

    <li class="menu">
        <router-link to="/Reports" class="dropdown-toggle" @click="toggleMobileMenu">
            <div class="">
                <i data-feather="grid"></i>
                <span>{{ $t('Promotions') }}</span>
            </div>
        </router-link>
    </li>

    <li class="menu">
        <a class="dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#Params" aria-controls="Params" aria-expanded="false">
            <div class="">
                <i data-feather="server"></i>
                <span>{{ $t('Params') }}</span>
            </div>
            <Arrow />
        </a>
        <ul id="Params" class="collapse submenu list-unstyled" data-bs-parent="#sidebar">
            <li>
                <router-link to="/" @click="toggleMobileMenu">
                    {{ $t('Variations') }}
                </router-link>
            </li>
            <li>
                <router-link to="/index2" @click="toggleMobileMenu">
                    {{ $t('Brands') }}
                </router-link>
            </li>
            <li>
                <router-link to="/index2" @click="toggleMobileMenu">
                    {{ $t('Categories') }}
                </router-link>
            </li>
        </ul>
    </li>

    <br />
    <p>{{ $t('OTHERS') }}</p>

    <li class="menu">
        <router-link to="/Profile" class="dropdown-toggle" @click="toggleMobileMenu">
            <div class="">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-user"
                >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>{{ $t('Profile') }}</span>
            </div>
        </router-link>
    </li>

    <li class="menu">
        <a class="dropdown-toggle" data-bs-toggle="modal" data-bs-target="#modalLogout">
            <div class="">
                <fa :icon="['fas', 'right-to-bracket']" class="feather feather-airplay"> </fa>
                <span>{{ $t('Log Out') }}</span>
            </div>
        </a>
    </li>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import { useStore } from 'vuex';
    import feather from 'feather-icons';
    import menuList from './menuList.vue';
    import Arrow from '@/components/layout/components/arrow.vue';

    const store = useStore();
    const user = store.getters.getUser;

    const menus = ref([]);
    const subMenus = ref([]);

    onMounted(() => {
        feather.replace();
        getMenusByRol();
    });

    const menusRoles = ref([]);
    function getMenu(data) {
        var GetMenuResponse = axiosWS.getMenu(data);

        GetMenuResponse.then((res) => {
            if (res.status == 200) {
                const { data } = res;
                const menuAux = data.menu;
                menuAux.idMenu == 0 ? menus.value.push(menuAux) : subMenus.value.push(menuAux);
            } else {
            }
        });
    }

    function getMenusByRol() {
        console.log('user-menu', user);
        var GetMenuRolResponse = axiosWS.getMenusByRol(user);

        GetMenuRolResponse.then((res) => {
            if (res.status == 200) {
                const { data } = res;
                menusRoles.value = data.menus;
                sortMenusUser();
            } else {
            }
        });
    }

    function sortMenusUser() {
        menusRoles.value.forEach((value) => {
            getMenu(value);
        });
        subMenus.value.sort(function(a,b){return a.numOrder - b.numOrder;});
        menus.value.sort(function(a,b){return a.numOrder - b.numOrder;});
    }

    const toggleMobileMenu = () => {
        if (window.innerWidth < 991) {
            store.commit('toggleSideBar', !store.state.is_show_sidebar);
        }
    };
</script>
