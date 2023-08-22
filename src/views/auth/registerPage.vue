<template>
  <div>
    <div class="">
      <div>
        <!-- <img src="@/assets/img/jappa_logo.png" alt="" /> -->
        <span>SAMZUGA GPT </span>
      </div>

      <div
        class="auth-content tw-h-[90vh] tw-flex flex-column tw-justify-center"
      >
        <div>
          <div class="tw-mb-6">
            <h3 class="tw-font-bold mb-0">Create Account</h3>
            <span class="tw-text-sm"
              >Already have an account?
              <router-link to="/login" class="tw-text-primary"
                >Login</router-link
              >
            </span>
          </div>
          <form action="" @submit.prevent="login">
            <span v-if="error" class="mb-3 error-alert">{{ error }}</span>
            <div class="tw-flex tw-space-x-6">
              <div class="mb-3 tw-w-full">
                <label for="">First Name</label>
                <input
                  type="text"
                  v-model="credentials.email"
                  id="first_name"
                  placeholder="First Name"
                />
              </div>
              <div class="mb-3 tw-w-full">
                <label for="">Last Name</label>
                <input
                  type="text"
                  v-model="credentials.email"
                  id="lastname"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div class="mb-3">
              <label for="">Email</label>
              <input
                type="email"
                v-model="credentials.email"
                id="email"
                placeholder="Email"
              />
            </div>

            <div class="tw-mb-3">
              <label for="">Password</label>
              <input
                type="password"
                v-model="credentials.password"
                id="password"
                placeholder="Password"
              />
            </div>

            <div class="tw-mb-4 tw-flex align-center tw-space-x-2">
              <input type="checkbox" name="" id="" />
              <span class=" tw-text-sm">
                I agree to Samzuga Gpt
                <router-link to="/login" class="tw-text-primary"
                  >Terms of service</router-link
                >
                and
                <router-link to="/login" class="tw-text-primary"
                  >Privacy policy</router-link
                >
              </span>
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
                <span v-else>create account</span>
              </button>
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
      error: "",
    };
  },
  methods: {
    login() {},
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
