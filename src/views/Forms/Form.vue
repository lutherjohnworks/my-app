<template>
  <div class="form pa-7">
    <v-container>
      <v-row class="no-gutter">
        <v-col class="col-lg-6">
          <v-card
            elevation="4"
            height="635"
            width="600"
            class="white text-center pa-7 pa-sm-12"
          >
            <v-layout>
              <v-flex class="pa-10 pb-8 text-center">
                <v-img src="logo.png" height="120" width="120" class="mx-auto">
                </v-img>
                <p class="mx-auto font-weight-bold">Welcome to Company Name</p>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    :rules="passwordRules"
                    label="Password"
                    light
                    required
                  ></v-text-field>

                  <div class="d-flex mb-6">
                      <div class="mr-auto caption">
                        <v-checkbox
                          v-model="checkbox"
                          :rules="[(v) => !!v || 'You must agree to continue!']"
                          label="Remember me?"
                          required
                          input-value="true"
                          value
                          disabled
                        ></v-checkbox>
                      </div>

                      <div class="pa-2 mt-3">
                        <a href="javascript:void(0)" class="link caption"
                          >Forgot Username?</a
                        >
                      </div>
                      <div class="pa-2 mt-3">
                        <a href="javascript:void(0)" class="link caption"
                          >Forgot Username?</a
                        >
                      </div>
                    </div>
                  
                  <v-btn
                    color="#F5A800"
                    height="56"
                    block
                    class="mr-4 rounded-pill white--text mt-4"
                    @click="validate"
                  >
                    Log in
                  </v-btn>

                  <p class="subheading font-weight-regular mt-4">
                    Don't have a account?
                    <a href="https://community.vuetifyjs.com" target="_blank"
                      >Register</a
                    >
                  </p>
                </v-form>
              </v-flex>
            </v-layout>
          </v-card>
        </v-col>  

        <v-col class="col-lg-6">
          <v-card class="elevation-4 text-center">
            <v-row>
              <v-col>
                <div class="pa-7 pa-sm-12">
                  <img src="@/assets/Image42.png" />
                  <h2
                    class="font-weight-bold mt-4 blue-grey--text text--darken-2"
                  >
                    Log in to Dashboard
                  </h2>

                  <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                    class="font-weight-thin"
                  >
                    <v-text-field
                      v-model="username"
                      :rules="usernameRules"
                      label="Username"
                      class="mt-4"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="password"
                      :rules="passwordRules"
                      label="Password"
                      required
                    ></v-text-field>

                    <div class="d-flex mb-6">
                      <div class="mr-auto pa-2 caption">
                        <v-checkbox
                          v-model="checkbox"
                          :rules="[(v) => !!v || 'You must agree to continue!']"
                          label="Remember me?"
                          required
                          input-value="true"
                          value
                          disabled
                        ></v-checkbox>
                      </div>

                      <div class="pa-2 mt-5">
                        <a href="javascript:void(0)" class="link caption"
                          >Forgot Username?</a
                        >
                      </div>
                      <div class="pa-2 mt-5">
                        <a href="javascript:void(0)" class="link caption"
                          >Forgot Username?</a
                        >
                      </div>
                    </div>
                    <v-btn
                      color="#F5A800"
                      height="56"
                      block
                      class="mr-4 rounded-pill white--text"
                      submit
                      @click="submit"
                      >LogIn</v-btn
                    >
                  </v-form>

                  <div class="align-center mt-8 mb-sm-0">
                    <p>
                      Dont have an account ?
                      <a href="javascript:void(0)" class="link font-weight-thin"
                        >Register</a
                      >
                    </p>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>  
      </v-row>

      <v-divider class="mt-6"></v-divider>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
  }),
};
</script>