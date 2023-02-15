<template>
    <div class="form full-form auth-cover">
      <div class="form-container">
          <!-- Formulario de Datos -->
          <div class="form-form">
            <div class="form-form-wrap">
              <div class="form-container">
                <div class="form-content">
                  <!-- MarketPlace Brand Name -->
                  <div class="tc-image"></div>
                  <h1 class="tc-image-space"> {{ $t('Log In') }} <span class="brand-name"> Calculadora </span></h1>

                    <div class="tc-isp"></div>

                    <!-- Preguntar si tienen autoregistro o les damos las credenciales -->
                    <br />
                    <!-- <p class="signup-link"> {{ $t('New Here?') }} <router-link to="/auth/register"> Crear cuenta nueva</router-link></p> -->

                    <!-- Formulario de Login -->
                    <form class="text-start" @submit.prevent="hola">
                      
                      <div class="form">     

                        <!-- USER MAIL -->
                        <div id="username-field" class="field-wrapper input">
                          <label for="username"> Documento de Identidad </label>
                          <fa :icon="['fas', 'user']" class="feather feather-user"> </fa>
                          <input type="text" class="form-control" placeholder="Usuario" v-model="user" />
                        </div>

                        <!-- Pass Input  -->
                        <div id="password-field" class="field-wrapper input mb-2">
                          <div class="d-flex justify-content-between">
                              <label for="password">{{ $t('Password') }}:</label>
                          </div>
                          <fa :icon="['fas', 'lock']" class="feather feather-lock"> </fa>
                          <input :type="pwd_type" class="form-control" placeholder="Ingrese su contraseña" v-model="password" />
                        </div>

                        <!-- INFO MODAL  MSJ BOX -->
                        <div class="text-left" id="alertAlignID" v-bind="msjBox" v-if="msjBox.visible === true">
                          <div class="alert" role="alert" v-if="msjBox.status === true" style="color: green">
                              <strong id="alertID"> {{ $t('Successful Process!') }}</strong>
                              {{ msjBox.message }}
                          </div>
                          <div class="alert" role="alert" v-else style="color: red">
                              <strong id="alertID">Error !.</strong>
                              {{ msjBox.message }}
                          </div>
                        </div>

                        <div class="d-sm-flex justify-content-between mb-4">
                          <div class="field-wrapper toggle-pass d-flex align-items-center">
                            <p class="d-inline-block">{{ $t('Show Password') }}</p>
                            
                            <label class="switch s-primary mx-2">
                                <input v-model="checkPass" type="checkbox" @change="set_pwd_type" class="custom-control-input" checked="" />
                                <span class="slider round"></span>
                            </label>
                          </div>

                            <div class="field-wrapper">
                                <button type="submit" class="btn btn-primary" @click="ingresar">{{ $t('LogIn') }}</button>
                            </div>

                        </div>  

                        <div class="field-wrapper">
                          <router-link to="/auth/pass-recovery" class="forgot-pass-link"> {{ $t('Forgot Password?') }}</router-link>
                        </div>
                      </div>
                    </form>
                    <p class="terms-conditions">
                      © 2022 Todos los derechos reservados. <router-link to="/"> {{NameBrand}} </router-link> es un producto de SKYNET SAS.
                      <a href="javascript:void(0);">Cookie Preferences</a>, <a href="javascript:void(0);">Privacidad</a>, y <a href="javascript:void(0);"> Terminos</a>.
                    </p>
                </div>
              </div>
            </div>
          </div>
          <!-- Imagen de Bemovil -->
          <div class="form-image">
            <div class="l-image"></div>
          </div>
      </div>
  </div>
</template>

<script setup>
    import '@/assets/sass/authentication/auth.scss';
    import { useMeta } from '@/composables/use-meta';
    import { ref } from 'vue';

    useMeta({ title: 'Login' });

    const waiting = ref(false);
    //variables
    var user = ref('');
    const pwd_type = ref('password');
    var password = ref('');
    var checkPass = ref(false);
    var msjBox = ref({
        visible: false,
        status: false,
        message: ' ',
    });

    function escribirMensaje(status, msj) {
        msjBox.value.visible = true;
        msjBox.value.status = status;
        msjBox.value.message = msj;
    }

    function resetModal() {
        msjBox.value.visible = false;
        msjBox.value.status = false;
        msjBox.value.message = '';
    }

    
    const set_pwd_type = () => {
      if (pwd_type.value === 'password') {
        pwd_type.value = 'text';
        checkPass = true;
      } else {
        pwd_type.value = 'password';
        checkPass = false;
      }
    };

    function ingresar() {
      resetModal();
      if (user.value.length == 0) {
        escribirMensaje(false, 'Por favor ingrese un usuario.');
      } else {
        if (user.value.length <= 3) {
            escribirMensaje(false, 'Usuario no valido.');
        } else {
          if (password.value.length == 0) {
            escribirMensaje(false, 'Por favor ingrese su clave.');
          } else {
              //hacer axios
              var data = {
                documento: user.value,
                clave: password.value,
              };
              waiting.value = true;
              var loginResponse = axiosWS.userSignIn(data);
              loginResponse.then((res) => {
                
                if (res.status == 200) {
                  const {data} = res;
                  var exp_date = new Date()

                  //user
                  const user = {
                    error: data.error,
                    correo: data.correo,
                    nombre: data.nombre,
                    user: data.user,
                    msg: data.msg,
                    is_login: true,
                    idEmp: "",
                    nombreEmp: "",
                    urlImg: "",
                    tokens: {
                      access: data.tokens.access,
                      refresh: data.tokens.refresh,
                    },
                    expiration: exp_date
                  }

                  // console.log("user", user)
                  store.dispatch('setUser', user);
                  
                  //Reviso la cantidad de comercios que tiene el usuario.
                  var userEmpresasResponse = axiosWS.userEmpresas(user.user);
                  userEmpresasResponse.then((res) => {
                    waiting.value = false;
                    if(res.status == 200){
                      // console.log("compañias del usuario ->", data.companies.length)
                      if (res.data.companies.length > 1) 
                      {
                        const empresas = res.data.companies
                        store.dispatch('addEmpresas', empresas)
                        console.log('Empresas ->', store.getters.getempresas)
                        //redigirimos a los comercios del usuario
                        router.replace('/empresas')
                      } else {
                        // console.log('Solo tiene un comercio inscrito')
                        const empresas = res.data.companies
                        console.log("Empresas del usuario ->", empresas)
                        const dataEA = {
                          id: empresas[0].id,
                          nombreEmp: empresas[0].nombreEmp,
                          urlImg: empresas[0].urlImg,
                          idPerfil: empresas[0].idPerfil
                        }
                        //guardamos los comercios por medio de la action
                        store.dispatch('addEmpresas', empresas)
                        store.dispatch('addEmpresaActual', dataEA)
                        router.push('/')
                      } 
                    }
                    else{
                      waiting.value = false;
                      escribirMensaje(false, 'Usuario o contraseña incorrectos, intente mas tarde.');
                    }
                  });
                } else {
                    waiting.value = false;
                    escribirMensaje(false, 'Usuario o contraseña incorrectos, intente mas tarde.');
                  }
              });
          }
        }
      }
    }
</script>
