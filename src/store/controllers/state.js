const countryList = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
];

const user = {
    email: '',
    id: '',
    is_login: false,
    tokens: {
        access: '',
        refresh: '',
    },
    //   expiration:""
};

const state = {
    layout: 'app',
    is_show_sidebar: true,
    is_show_search: false,
    is_dark_mode: false,
    dark_mode: 'light',
    locale: null,
    menu_style: 'vertical',
    layout_style: 'full',
    countryList: countryList,
    user: user,
};

export default state;
