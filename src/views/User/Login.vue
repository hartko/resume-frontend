<template>
  <b-container fluid>
    <b-row class="mt-5 justify-content-center">
      <b-col cols="3" class="mt-5">
        <form v-on:submit.prevent="signin()">
          <b-card class="p-3" style="background-color: #111111">
            <div class="text-warning">
              <h1>Login</h1>
            </div>
            <div class="mt-5 mb-3">
              <b-input-group>
                <b-input-group-prepend is-text>
                  <b-icon icon="envelope-fill"></b-icon>
                </b-input-group-prepend>
                <b-form-input
                  type="email"
                  v-model="user.email"
                  placeholder="Enter your email"
                ></b-form-input>
              </b-input-group>
            </div>
            <div class="my-3">
              <b-input-group>
                <b-input-group-prepend is-text>
                  <b-icon icon="key-fill"></b-icon>
                </b-input-group-prepend>
                <b-form-input
                  type="password"
                  v-model="user.password"
                  placeholder="Enter your password"
                ></b-form-input>
              </b-input-group>
            </div>
            <div class="text-right">
              <b-link class="text-warning" href="#foo">Forgot Password?</b-link>
            </div>
            <div class="mb-4 mt-4 text-black">
              <b-button block pill variant="warning" type="submit"><b>Login</b></b-button>
            </div>
            <div class="my-3 text-white text-center">
              <b-label>Don't have an account?</b-label>
              <b-link class="text-warning" href="/sign-up">Sign Up</b-link>
            </div>
          </b-card>
        </form>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { login } from "../../services/auth.api";
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    /**
     *Sign in account
     *handle auth data
     */
    signin() {
      var auth = login(this.user).then((auth) => {
        localStorage.setItem('auth', JSON.stringify({
          user: auth.data.auth.id,
          name: auth.data.auth.name,
          email: auth.data.auth.email,
        }));
        localStorage.setItem('id',auth.data.token)
      });
    },
  },
};
</script>
