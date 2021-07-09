<template>
  <div class="projects">
    <v-container>
      <v-row>
        <v-col class="col-lg-6">
          <v-card class="mx-auto" max-width="500">
            <v-container fluid>
              <v-row dense>
                <v-col
                  v-for="card in cards"
                  :key="card.title"
                  :cols="card.flex"
                >
                  <v-card>
                    <v-img
                      :src="card.src"
                      class="white--text align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="200px"
                    >
                      <v-card-title v-text="card.title"></v-card-title>
                    </v-img>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn icon>
                        <v-icon>mdi-heart</v-icon>
                      </v-btn>

                      <v-btn icon>
                        <v-icon>mdi-bookmark</v-icon>
                      </v-btn>

                      <v-btn icon>
                        <v-icon>mdi-share-variant</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
        <v-col class="col-lg-6">
          <v-card class="mx-auto" max-width="800">
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text> Share </v-btn>

              <v-btn color="orange" text> Explore </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-lg-12">
          <v-row>
            <v-col class="col-6">
              <v-card class="mx-auto elavation-3" max-width="800">
                <v-row no-gutters class="pa-1">
                  <v-col cols="4">
                    <p class="orange--text">Sunrise</p>
                  </v-col>
                  <v-col cols="4">
                    <p class="orange--text float-right">Tracking</p>
                  </v-col>
                  <v-col cols="4">
                    <p class="orange--text float-right pr-2">Requested</p>
                  </v-col>
                </v-row>
                <v-card-actions class="float-end wrap">
                  <v-btn color="orange" text> Share </v-btn>
                  <v-btn color="orange" text> Explore </v-btn>
                </v-card-actions>
                <v-chip class="ma-2" color="orange" text-color="white">
                  Premium
                  <v-icon right> mdi-star </v-icon>
                </v-chip>
                <v-chip close color="blue" label pill></v-chip>
              </v-card>
            </v-col>
            <v-col class="col-6">
              <TheDashboard></TheDashboard>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" lg="8">
          <v-chip class="ma-2 rounded-l-xl" color="indigo" text-color="white">
            <v-avatar left>
              <v-icon>mdi-account-circle</v-icon>
            </v-avatar>
            Mike
          </v-chip>

          <v-chip class="ma-2" color="orange" text-color="white">
            Premium
            <v-icon right> mdi-star </v-icon>
          </v-chip>

          <v-chip class="ma-2" color="primary" text-color="white">
            1 Year
            <v-icon right> mdi-cake-variant </v-icon>
          </v-chip>

          <v-chip class="ma-2" color="green" text-color="white">
            <v-avatar left class="green darken-4"> 1 </v-avatar>
            Years
          </v-chip>

          <v-chip
            class="ma-2"
            close
            color="teal"
            text-color="white"
            @click:close="close"
          >
            <v-avatar left>
              <v-icon>mdi-checkbox-marked-circle</v-icon>
            </v-avatar>
            Confirmed
          </v-chip>

          <v-chip
            class="ma-2"
            close
            color="teal"
            text-color="white"
            close-icon="mdi-delete"
            @click:close="close"
          >
            <v-avatar left>
              <v-icon>mdi-checkbox-marked-circle</v-icon>
            </v-avatar>
            Confirmed
          </v-chip>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data: () => ({
    cards: [
      {
        title: "Pre-fab homes",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 12,
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 6,
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 6,
      },
    ],
    labels: ["SU", "MO", "TU", "WED", "TH", "FR", "SA"],
    time: 0,
    forecast: [
      {
        day: "Tuesday",
        icon: "mdi-white-balance-sunny",
        temp: "24\xB0/12\xB0",
      },
      {
        day: "Wednesday",
        icon: "mdi-white-balance-sunny",
        temp: "22\xB0/14\xB0",
      },
      { day: "Thursday", icon: "mdi-cloud", temp: "25\xB0/15\xB0" },
    ],
  }),
  components: {
    TheDashboard: () =>
      import(
        "@/components/DialogBox/Dialog"
      ),

  }
};
</script>