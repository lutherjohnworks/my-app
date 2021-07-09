<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" dark width="305" app>
      <p class="pa-5 mt-6">To do App</p>
      <v-divider></v-divider>
      <v-list class="mt-10">
        <v-list-item v-for="data in datas" :key="data.title" :to="data.to">
          <v-list-item-icon>
            <v-icon> {{ data.icon }} </v-icon>
          </v-list-item-icon>

          <v-list-item-title>
            {{ data.title }}
          </v-list-item-title>
        </v-list-item>
        <v-list-group v-for="item in items" :key="item.title" :to="item.to">
          <template v-slot:activator>
            <v-list-item>
              <v-list-item-icon>
                <v-icon> {{ item.icon }} </v-icon>
              </v-list-item-icon>

              <v-list-item-title>
                {{ item.title }}
              </v-list-item-title>
            </v-list-item>
          </template>

          <v-list-item
            v-for="child in item.children"
            :key="child.title"
            :to="child.to"
            link
          >
            <v-list-item-content>
              <v-list-item-icon>
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title v-text="child.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark color="primary" src="bg-header.jpg" prominent shrink-on-scroll>
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>Vuetify To do Application</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import sidebarItems from "./sidebarItems";
import sidebarDatas from "./sidebarDatas";

export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    drawer: null,
    items: sidebarItems,
    datas: sidebarDatas,
  }),
};
</script>