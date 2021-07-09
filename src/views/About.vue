<template>
  <div class="about pa-6 mt-n1">
    <v-container>
      <v-row>
        <v-col cols="12" lg="6">
          <v-card
            elevation="4"
            height="450"
            width="600"
            class="light-blue lighten-5 pa-7 pa-sm-12"
          >
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="Name"
                required
              ></v-text-field>

              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>

              <v-select
                v-model="select"
                :items="items"
                :rules="[(v) => !!v || 'Item is required']"
                label="Item"
                required
              ></v-select>

              <v-checkbox
                v-model="checkbox"
                :rules="[(v) => !!v || 'You must agree to continue!']"
                label="Do you agree?"
                required
              ></v-checkbox>

              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
              >
                Validate
              </v-btn>

              <v-btn color="error" class="mr-4" @click="reset">
                Reset Form
              </v-btn>

              <v-btn color="warning" @click="resetValidation">
                Reset Validation
              </v-btn>
            </v-form>
          </v-card>
        </v-col>

        <v-col cols="12" lg="6">
          <v-card
            elevation="4"
            height="450"
            width="600"
            class="white text-center pa-7 pa-sm-12"
          >
            <v-list-item-avatar color="grey darken-3" height="99" width="85">
              <v-img
                class="elevation-6"
                alt=""
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                height="99"
                width="85"
              ></v-img>
            </v-list-item-avatar>
            <v-card-body>
              <v-list-item-content>
                <v-list-item-title>Evan You</v-list-item-title>
                <v-list-item-subtitle>
                  Mon, 12:30 PM, Mostly sunny
                </v-list-item-subtitle>
              </v-list-item-content>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, temporibus quaerat nostrum laborum rerum, laudantium
                perferendis at inventore voluptatum sunt cum accusantium
                consectetur molestias pariatur nobis similique architecto et.
                Eius, atque! Assumenda reprehenderit quibusdam tempore quod
                animi hic error rem ipsam dicta quae aut possimus nemo fugiat,
                eveniet, non id.
              </p>
              <v-icon>mdi-cog</v-icon>
            </v-card-body>
          </v-card>
        </v-col>
      </v-row>
     
      <v-row>
        <v-col cols="12" lg="6">
          <h1>This is an about page</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            repudiandae ab necessitatibus nemo natus laudantium facere dolorem
            nulla ullam placeat, possimus sed dolores molestiae asperiores,
            architecto qui eos hic, obcaecati explicabo fuga sit veniam
            temporibus odio! Labore fugit aspernatur asperiores deserunt odio
            tempora aut soluta nesciunt id, assumenda unde eligendi?
          </p>
        </v-col>

        <v-col cols="12" lg="6">
          <div
            elavation="4"
            class="pa-4 text-center primary rounded-t-xl text-wrap"
          >
            <p class="mb-0">Company | Respect</p>
            <p class="mt-0">Copyright @ 2021</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
export default {
  name: "About",
 
};
</script>