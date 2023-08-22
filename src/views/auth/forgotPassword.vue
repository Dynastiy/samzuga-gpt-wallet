<template>
  <div>
    <div class="">
      <div class="auth-content">
        <div>
          <!-- <img src="@/assets/img/jappa_logo.png" alt="" /> -->
          <span>logo</span>
        </div>

        <div
          class="auth-content tw-h-[80vh] tw-flex flex-column tw-justify-center"
        >
          <div class="tw-mb-6">
            <h3 class="tw-font-bold mb-0">Forgot Password</h3>
            <span class="tw-text-sm">
              Enter the email you used to create your account so we can send you
              instructions on how to reset your password.
            </span>
          </div>
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

            <div class="tw-mb-6">
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
                <span v-else>Send</span>
              </button>
            </div>

            <div class="tw-mb-3">
              <button
                @click="login"
                class="outline-btn w-100"
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
                <span v-else>Back to Login</span>
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
