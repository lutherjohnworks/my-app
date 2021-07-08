<template>
  <div class="about pa-6">
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
        <v-col cols="12" lg="12">
          <v-data-table
            :headers="headers"
            :items="desserts"
            :items-per-page="5"
            class="elevation-1"
          ></v-data-table>
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
  name: "Home",
  data() {
    return {
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%",
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%",
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%",
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%",
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%",
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
      ],
    };
  },
};
</script>