import axios from 'axios';

//Defino el entorno si es producción o desarrollo
class AxiosCalls {
    baseURLws;

    constructor() {
        //dev
        // this.baseURLws = 'http://localhost:5000/api/v1';
        //produccion
        this.baseURLws = 'https://prueba2.skynet.com.co/api/v1';
    }

    // Endpoint predefinidos
    // singIn = () => {
    //     `${this.baseURLws}/user/sign/in`;
    // };

    /////////////////////////////////////////////
    //////////////// expirtation token /////////
    ///////////////////////////////////////////
    expiration = async (data) => {
        // One exp Time in ms (seconds)

        var exptime = 1000;
        var time = new Date(data.time);
        console.log(time);

        var save_date = new Date(time);

        var exp_date = new Date();
        var Result = Math.round(1200 - (exp_date.getTime() - save_date.getTime()) / exptime);

        var Final_Result = Result.toFixed(0);
        console.log('Number of seconds remaining till logout \n' + Final_Result + 's');
    };
    /////////////////////////////////////////////
    //     Login & PassWord Serveces  ///////////
    ////////////////////////////////////////////

    userSignUp = async (data) => {
        const urlrequest = `${this.baseURLws}/user/sign/up`;

        const body = {
            name: data.name,
            lastname: data.lastname,
            password: data.password,
            idDocumentType: data.idDocumentType,
            document: data.document,
            phone: data.phone,
            email: data.email,
        };

        const result = await axios
            .post(urlrequest, body)
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });

        return result;
    };

    userSignIn = async (data) => {
        const urlrequest = `${this.baseURLws}/user/sign/in`;

        const body = {
            email: data.emaUsuario,
            password: data.password,
        };

        const result = await axios
            .post(urlrequest, body)
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });

        return result;
    };

    userForgotpass = async (data) => {
        const urlrequest = `${this.baseURLws}/user/forgotpass`;

        const body = {
            email: data.email,
        };

        const result = await axios
            .post(urlrequest, body)
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });

        return result;
    };

    userChangepass = async (data) => {
        const urlrequest = `${this.baseURLws}/user/changepass`;

        const body = {
            email: data.email,
            oldPassword: data.oldPassword,
            newPassword: data.newPassword,
        };

        console.log(body);

        const result = await axios
            .post(urlrequest, body)
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });

        return result;
    };
    /////////////////////////////////////////////
    //     Login & PassWord Serveces   //////////
    ////////////////////////////////////////////

    ////////////////////////////////////////////
    /////       Data Users        /////////////
    ///////////////////////////////////////////
    getTipos = async (data) => {
        const urlrequest = `${this.baseURLws}/documentsTypes`;

        const paramsOptions = {};

        const headerOptions = {
            'Access-Control-Allow-Origin': '*',
        };

        const dataForm = {
            params: paramsOptions,
            headers: headerOptions,
        };

        const result = await axios
            .get(urlrequest, dataForm)
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });

        return result;
    };

    getShops = async () => {
        const urlrequest = `${this.baseURLws}/shops/1`;
        // const paramsOptions = {};
        const headerOptions = {
            'Access-Control-Allow-Origin': '*',
        };
        const dataForm = {
            // params: paramsOptions,
            headers: headerOptions,
        };

        const result = await axios
            .get(urlrequest, dataForm)
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });
        return result;
    };

    getShop = async (data) => {
        const urlrequest = `${this.baseURLws}/shop/${data.id}`;
        // const paramsOptions = {};
        const headerOptions = {
            'Access-Control-Allow-Origin': '*',
        };
        const dataForm = {
            // params: paramsOptions,
            headers: headerOptions,
        };

        const result = await axios
            .get(urlrequest, dataForm)
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });
        return result;
    };

    getUsuario = async (data) => {
        const urlrequest = `${this.baseURLws}/user/${data.id}`;
        // e386570a-464d-42ca-b4d2-78c7f851160e

        const paramsOptions = {};

        const headerOptions = {
            'Access-Control-Allow-Origin': '*',
        };

        const dataForm = {
            params: paramsOptions,
            headers: headerOptions,
        };

        const result = await axios
            .get(urlrequest, dataForm)
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });

        return result;
    };

    getCategories = async (data) => {
        // En el Frontend solo envio el objeto completo
        const urlrequest = `${this.baseURLws}/categories/${data.id}`;

        const headerOptions = {
            'Access-Control-Allow-Origin': '*',
        };

        const result = await axios
            .get(urlrequest, { headers: headerOptions })
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });

        return result;
    };

    getCategory = async (data) => {
        // En el Frontend solo envio el objeto completo
        const urlrequest = `${this.baseURLws}/category/${data.id}`;

        const headerOptions = {
            'Access-Control-Allow-Origin': '*',
        };

        const result = await axios
            .get(urlrequest, { headers: headerOptions })
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });

        return result;
    };

    getSubcategories = async () => {
        const urlrequest = `${this.baseURLws}/subcategories`;

        const headerOptions = {
            'Access-Control-Allow-Origin': '*',
        };

        const result = await axios
            .get(urlrequest, { headers: headerOptions })
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });

        return result;
    };

    getSubcategory = async (data) => {
        // En el Frontend solo envio el objeto completo
        const urlrequest = `${this.baseURLws}/subcategory/${data.id}`;

        const headerOptions = {
            'Access-Control-Allow-Origin': '*',
        };

        const result = await axios
            .get(urlrequest, { headers: headerOptions })
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });

        return result;
    };

    getSubcategoriesByCategory = async (data) => {
        const urlrequest = `${this.baseURLws}/subcategories/${data.id}`;

        const headerOptions = {
            'Access-Control-Allow-Origin': '*',
        };

        const result = await axios
            .get(urlrequest, { headers: headerOptions })
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });

        return result;
    };

    createCategory = async (data) => {
        const urlrequest = `${this.baseURLws}/category`;
        // e386570a-464d-42ca-b4d2-78c7f851160e

        const bodyOptions = {
            nameCategory: data.nameCategory,
            urlLink: data.urlLink,
            urlImg: data.urlImg,
            idApp: data.idApp,
        };

        const headerOptions = {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${data.access}`,
        };

        const result = await axios
            .post(urlrequest, bodyOptions, { headers: headerOptions })
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });
        return result;
    };

    updateSubcategory = async (data) => {
        const urlrequest = `${this.baseURLws}/subcategory`;

        const bodyOptions = {
            id: data.id,
            nameSubcategory: data.nameSubcategory,
            idCategory: data.idCategory,
            urlImg: data.urlImg,
            status: data.status,
        };

        const headerOptions = {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${data.access}`,
        };

        const result = await axios
            .put(urlrequest, bodyOptions, { headers: headerOptions })
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });

        return result;
    };

    updateCategory = async (data) => {
        const urlrequest = `${this.baseURLws}/category`;

        const bodyOptions = {
            id: data.id,
            nameCategory: data.nameCategory,
            urlImg: data.urlImg,
            status: data.status,
        };

        const headerOptions = {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${data.access}`,
        };

        const result = await axios
            .put(urlrequest, bodyOptions, { headers: headerOptions })
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });

        return result;
    };

    getUserApps = async (data) => {
        const urlrequest = `${this.baseURLws}/app-user/${data.id}`;

        const headerOptions = {
            'Access-Control-Allow-Origin': '*',
        };

        const result = await axios
            .get(urlrequest, { headers: headerOptions })
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });

        return result;
    };

    getMenusByRol = async (data) => {
        const urlrequest = `${this.baseURLws}/menus-rol/${data.idRol}`;

        const headerOptions = {
            'Access-Control-Allow-Origin': '*',
        };

        const result = await axios
            .get(urlrequest, { headers: headerOptions })
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });

        return result;
    };

    getMenus = async (data) => {
        const urlrequest = `${this.baseURLws}/menus`;

        const headerOptions = {
            'Access-Control-Allow-Origin': '*',
        };

        const result = await axios
            .get(urlrequest, { headers: headerOptions })
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });

        return result;
    };

    getMenu = async (data) => {
        const urlrequest = `${this.baseURLws}/menu/${data.idMenu}`;

        const headerOptions = {
            'Access-Control-Allow-Origin': '*',
        };

        const result = await axios
            .get(urlrequest, { headers: headerOptions })
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });

        return result;
    };

    getSubMenus = async (data) => {
        const urlrequest = `${this.baseURLws}/subMenu/${data.id}`;
        const headerOptions = {
            'Access-Control-Allow-Origin': '*',
        };

        const result = await axios
            .get(urlrequest, { headers: headerOptions })
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });

        return result;
    };

    ////////////////////////////////////////////
    /////      End  Data Users     /////////////
    ///////////////////////////////////////////

    ////////////////////////////////////////////
    /////       Data Products        /////////////
    ///////////////////////////////////////////

    getThumbnail = async (data) => {
        const urlrequest = `${this.baseURLws}/thumbnail/${data.id}`;
        const headerOptions = {
            'Access-Control-Allow-Origin': '*',
        };

        const result = await axios
            .get(urlrequest, { headers: headerOptions })
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });
        return result;
    };

    getImagesByProduct = async (data) => {
        const urlrequest = `${this.baseURLws}/images-product/${data.id}`;
        const headerOptions = {
            'Access-Control-Allow-Origin': '*',
        };

        const result = await axios
            .get(urlrequest, { headers: headerOptions })
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });
        return result;
    };

    createProduct = async (data) => {
        const urlrequest = `${this.baseURLws}/product`;
        // e386570a-464d-42ca-b4d2-78c7f851160e

        const bodyOptions = {
            sku: data.sku,
            name: data.name,
            description: data.description,
            price: data.price,
            weight: data.weight,
            stock: data.stock,
            idSubcategories: data.idSubcategories,
            idShop: data.idShop,
            idUser: data.idUser,
        };

        const headerOptions = {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${data.access}`,
        };

        const result = await axios
            .post(urlrequest, bodyOptions, { headers: headerOptions })
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });

        return result;
    };

    updateProduct = async (data) => {
        const urlrequest = `${this.baseURLws}/product`;

        const bodyOptions = {
            id: data.id,
            sku: data.sku,
            name: data.name,
            description: data.description,
            price: data.price,
            weight: data.weight,
            stock: data.stock,
            idSubcategories: data.idSubcategories,
            // idUser: data.idUser,
        };

        const headerOptions = {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${data.access}`,
        };

        const result = await axios
            .put(urlrequest, bodyOptions, { headers: headerOptions })
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });

        return result;
    };

    createShop = async (data) => {
        const urlrequest = `${this.baseURLws}/shop`;
        // e386570a-464d-42ca-b4d2-78c7f851160e

        const bodyOptions = {
            nameShop: data.nameShop,
            document: data.document,
            dv: data.dv,
            address: data.address,
            phone: data.phone,
            email: data.email,
            idApp: data.idApp,
        };
        console.log('indo del bobyOpcion', bodyOptions);

        const headerOptions = {
            // 'content-type': 'text/json',
            // 'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${data.access}`,
        };

        // axios.defaults.headers.common = { Authorization: `Bearer ${data.access}` };

        const result = await axios
            .post(urlrequest, bodyOptions, { headers: headerOptions })
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });
        // console.log('res axios', result);
        return result;
    };

    createUserApp = async (data) => {
        const urlrequest = `${this.baseURLws}/userApp`;
        // e386570a-464d-42ca-b4d2-78c7f851160e

        const bodyOptions = {
            idUser: data.idUser,
            idShop: data.idShop,
            idRol: data.idRol,
            idApp: data.idApp,
        };

        const headerOptions = {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${data.access}`,
        };

        // axios.defaults.headers.common = { Authorization: `Bearer ${data.access}` };

        const result = await axios
            .post(urlrequest, bodyOptions, { headers: headerOptions })
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });
        // console.log('res axios', result);
        return result;
    };

    updateShop = async (data) => {
        const urlrequest = `${this.baseURLws}/shop`;
        // e386570a-464d-42ca-b4d2-78c7f851160e

        const bodyOptions = {
            id: data.id,
            nameShop: data.nameShop,
            document: data.document,
            dv: data.dv,
            idApp: data.idApp,
            address: data.address,
            phone: data.phone,
            email: data.email,
            status: data.status,
        };
        // console.log('son las bodyOptions', bodyOptions);

        const headerOptions = {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${data.access}`,
        };

        // axios.defaults.headers.common = { Authorization: `Bearer ${data.access}` };

        const result = await axios
            .put(urlrequest, bodyOptions, { headers: headerOptions })
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });

        return result;
    };

    getShopsProducts = async (data) => {
        const urlrequest = `${this.baseURLws}/shops-products/${data.id}`;
        const headerOptions = {
            'Access-Control-Allow-Origin': '*',
        };

        const result = await axios
            .get(urlrequest, { headers: headerOptions })
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });

        return result;
    };

    getProduct = async (data) => {
        const urlrequest = `${this.baseURLws}/product/${data.id}`;

        const headerOptions = {
            'Access-Control-Allow-Origin': '*',
        };

        const result = await axios
            .get(urlrequest, { headers: headerOptions })
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });

        return result;
    };

    ////////////////////////////////////////////
    /////      End  Data Products     /////////////
    ///////////////////////////////////////////

    getCommerces = async (data) => {
        const urlrequest = `${this.baseURLws}/comercios`;
        console.log(urlrequest);
        //submit.prevent.

        const paramsOptions = {};

        const headerOptions = {
            'Access-Control-Allow-Origin': '*',
        };

        const dataForm = {
            params: paramsOptions,
            headers: headerOptions,
        };

        const result = await axios
            .get(urlrequest, dataForm)
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });

        return result;
    };

    getCommerce = async (data) => {
        const urlrequest = `${this.baseURLws}/comercios/${data.params}`;

        const paramsOptions = {};

        const headerOptions = {
            'Access-Control-Allow-Origin': '*',
        };

        const dataForm = {
            params: paramsOptions,
            headers: headerOptions,
        };

        const result = await axios
            .get(urlrequest, dataForm)
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });

        return result;
    };

    /////////////////////////////////////////////////////////
    /////////// GET CIUDADES ///////////////////////////////
    ///////////////////////////////////////////////////////
    getCiudades = async (data) => {
        const urlrequest = `${this.baseURLws}/getCiudades`;

        const body = {
            codUsuario: data.codUsuario,
        };

        const result = await axios
            .get(urlrequest)
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });

        return result;
    };

    /////////////////////////////////////////////////////////
    /////////// GET CIUDADES ///////////////////////////////
    ///////////////////////////////////////////////////////
}

export default AxiosCalls;
