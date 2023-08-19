<template>
    <div>
      <div class="auth-container">
        <div class="auth-content">
          <div>
            <!-- <img src="@/assets/img/jappa_logo.png" alt="" /> -->
            <span>logo</span>
          </div>
  
          <div>
            <h5 class="text-uppercase font-weight-bold text-center my-4">
            forgot password
            </h5>
            <form action="" @submit.prevent="login">
              <span v-if="error" class="mb-3 error-alert">{{ error }}</span>
  
              <div class="tw-mb-5">
                <label for="">Email</label>
                  <input
                    type="email"
                    v-model="credentials.password"
                    id="email"
                    placeholder="Enter email"
                  />
              </div>

              <div class="tw-mb-3">
                <button
                  @click="login"
                  class="primary-btn w-100"
                  :class="loading ? 'bg-secondary' : ''"
                  :disabled="loading"
                >
                  <span v-if="loading"
                    ><i-icon
                      icon="eos-icons:bubble-loading"
                      width="20px"
                      class="text-white"
                    />
                  </span>
                  <span v-else>forgot password</span>
                </button>
              </div>

              <div class=" tw-text-center">
                <span class="tw-text-sm"><router-link to="/login" class="tw-text-secondary">Back to Login</router-link> </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
//   import { mapActions, mapState } from "vuex";
  export default {
    components: {},
    data: () => {
      return {
        credentials: {
          email: "",
          password: "",
        },
        loading: false,
        error: ""
      };
    },
    methods: {
        login(){

        }
    //   ...mapActions("auth", ["loginUser"]),
    //   login() {
    //     let credentials = {
    //       email: this.credentials.email,
    //       password: this.credentials.password,
    //     };
    //     this.loginUser(credentials)
    //   },
    },
  
    mounted() {
    //   this.$store.commit("auth/REMOVE_ERROR_SUCCESS");
    },
  
    computed: {
    //   ...mapState("auth", {
    //     loading: (state) => state.loading,
    //     error: (state) => state.error,
    //     errors: (state) => state.validationErrors,
    //     user: (state) => state.user,
    //   }),
    },
  };
  </script>
  
  <style>
  .auth-container {
    background-color: var(--gray-100);
    min-height: 100vh;
    display: grid;
    display: -moz-grid;
    display: -ms-grid;
    place-items: center;
  }
  
  .auth-content {
    background-color: var(--white-50);
    padding: 30px;
    border-radius: 8px;
    width: 35%;
  }
  
  .auth-content h5 {
    font-weight: 900;
  }
  
  .auth-content img {
    width: 50px;
    width: 50px;
  }
  
  .auth-content form label {
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 600;
  }
  
  .auth-content form input::placeholder {
    font-size: 14px;
    font-weight: 300;
    color: var(--gray-500);
  }
  
  .auth-content form .input-field .form-icon {
    color: var(--gray-500);
    font-size: 20px;
  }

  @media (max-width: 990px) {
    .auth-content {
        width: 80%;
    }
  }
  </style>
  