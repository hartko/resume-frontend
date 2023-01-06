<template>
  <b-container>
    <b-row class="justify-content-md-center mt-5">
      <b-col class="text-left" cols="12">
        <b-card style="background-color: #282828">
          <!-- <b-col cols="12"><h2>{{user.first_name}} {{user.middle_name}} {{user.last_name}}</h2></b-col> -->
          <b-col cols="12"><h2>Harriette</h2></b-col>
          <b-col cols="4">
            <b-icon icon="telephone-fill" variant="warning" font-scale="1"></b-icon>
            <!-- <b>{{user.phone_number}}</b> -->
            <b>09773558733</b>
          </b-col>
          <b-col cols="4">
            <b-icon icon="envelope-fill" variant="warning" font-scale="1"></b-icon>
            <!-- <b>{{user.email}}</b> -->
            <b>haryetmey.rodriguez@gmail.com</b>
          </b-col>
          <b-col cols="4">
            <b-icon icon="house-fill" variant="warning" font-scale="1"></b-icon>
            <!-- <b>{{user.address}}</b> -->
            <b>Somewhere out there</b>
          </b-col>
        </b-card>
      </b-col>
   
      <b-col class="text-left" cols="12">
        <b-card style="background-color: #282828">
          <div class="text-warning mb-4">
            <h2>EXPERIENCE: <b-icon icon="pencil-square"></b-icon></h2>
          </div>
          <h4><b>JUNIOR PROGRAMMER</b></h4>
          <h5><b>iPlus Intelligent Network Inc.</b></h5>
          <b>May 2018- July 2020</b>
          <ul>
            <li>Responsible for developing web based system.</li>
            <li>Assisting in the development of the Web Design.</li>
            <li>Structuring Database.</li>
            <li>
              Coordinating system testing and assisting users with acceptance testing.
            </li>
            <li>Responsible for the maintenance of the developed system.</li>
          </ul>
          <h4><b>FREELANCE WEB DEVELOPER</b></h4>
          <h5><b>Captivate IO Ltd</b></h5>
          <b>July 2020 - Present</b>
          <ul>
            <li>Work closely with Team Leads on change request functions.</li>
            <li>Contribute to design and development of Backend and API’s.</li>
            <li>Assisting in the development of the Web Design.</li>
          </ul>
        </b-card>
      </b-col>

      <b-col class="text-left mt-5" cols="12">
        <b-card style="background-color: #282828">
          <div class="text-warning mb-4">
            <h2>SKILLS: <b-icon icon="pencil-square"></b-icon></h2>
          </div>
          <h6><b>HTML</b></h6>
          <b-progress :value="html" :max="max" variant="warning"></b-progress>
          <h6 class="mt-3"><b>BOOTSTRAP</b></h6>
          <b-progress :value="bootstrap" :max="max" variant="warning"></b-progress>
          <h6 class="mt-3"><b>LARAVEL</b></h6>
          <b-progress :value="laravel" :max="max" variant="warning"></b-progress>
          <h6 class="mt-3"><b>VUE JS</b></h6>
          <b-progress :value="vuejs" :max="max" variant="warning"></b-progress>
          <h6 class="mt-3"><b>EXPRESS JS</b></h6>
          <b-progress :value="expressjs" :max="max" variant="warning"></b-progress>
          <h6 class="mt-3"><b>REACT JS</b></h6>
          <b-progress :value="reactjs" :max="max" variant="warning"></b-progress>
          <h6 class="mt-3"><b>MYSQL</b></h6>
          <b-progress :value="mysql" :max="max" variant="warning"></b-progress>
          <h6 class="mt-3"><b>MONGODB</b></h6>
          <b-progress
            class="mb-5"
            :value="mongodb"
            :max="max"
            variant="warning"
          ></b-progress>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { getUser } from "../../services/profile.api";
export default {
  name: "AboutMe",
  data() {
    return {
      max: 100,
      html: 50,
      bootstrap: 70,
      laravel: 70,
      vuejs: 70,
      expressjs: 40,
      reactjs: 20,
      mysql: 70,
      mongodb: 20,
      user: {},
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      var user = getUser(this.$route.params.id).then((res) => {
        this.user = res.data.user;
      });
    },
  },
};
</script>
