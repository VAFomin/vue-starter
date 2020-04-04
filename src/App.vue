<template>
<v-app>
    <v-app-bar app clipped-left>
      <v-toolbar-title>App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="() => {}">
            <v-list-item-title>Item 1</v-list-item-title>
          </v-list-item>
          <v-list-item @click="() => {}">
            <v-list-item-title>Item 2</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
</v-app>
</template>