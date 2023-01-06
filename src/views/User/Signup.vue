<template>
  <b-container fluid>
    <b-row class="mt-5 justify-content-center">
      <b-col cols="3" class="mt-5">
        <form v-on:submit.prevent="signup()">
          <b-card class="p-3" style="background-color: #111111">
            <div class="text-warning">
              <h1>Sign Up</h1>
            </div>
            <div class="mt-5 mb-3">
              <b-input-group>
                <b-input-group-prepend is-text>
                  <b-icon icon="person-fill"></b-icon>
                </b-input-group-prepend>
                <b-form-input
                  type="text"
                  v-model="user.firstname"
                  placeholder="Firstname"
                ></b-form-input>
              </b-input-group>
            </div>
            <div class="my-3">
              <b-input-group>
                <b-input-group-prepend is-text>
                  <b-icon icon="person-fill"></b-icon>
                </b-input-group-prepend>
                <b-form-input
                  type="text"
                  v-model="user.lastname"
                  placeholder="Lastname"
                ></b-form-input>
              </b-input-group>
            </div>
            <div class="my-3">
              <b-input-group>
                <b-input-group-prepend is-text>
                  <b-icon icon="envelope-fill"></b-icon>
                </b-input-group-prepend>
                <b-form-input
                  type="text"
                  v-model="user.email"
                  placeholder="Email"
                ></b-form-input>
              </b-input-group>
            </div>
            <div class="my-3">
              <b-input-group>
                <b-input-group-prepend is-text>
                  <b-icon icon="key-fill"></b-icon>
                </b-input-group-prepend>
                <b-form-input
                  type="text"
                  v-model="user.password"
                  placeholder="Password"
                ></b-form-input>
              </b-input-group>
            </div>
            <div class="my-3">
              <b-input-group>
                <b-input-group-prepend is-text>
                  <b-icon icon="key-fill"></b-icon>
                </b-input-group-prepend>
                <b-form-input
                  type="text"
                  v-model="user.password_confirmation"
                  placeholder="Confirm password"
                ></b-form-input>
              </b-input-group>
            </div>
            <div class="mb-4 mt-4 text-black">
              <b-button block pill variant="warning" type="submit">
                <b>Sign Up</b>
              </b-button>
            </div>
          </b-card>
        </form>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { register } from "../../services/auth.api";
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    // Signup
    signup() {

      console.log("user",this.user);
      register(this.user);
    },
  },
};
</script>
