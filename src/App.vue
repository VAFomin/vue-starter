<template>
    <v-app>
        <v-app-bar app clipped-left>
            <v-toolbar-title>App</v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn icon @click="change_color()">
                <v-icon>{{ icon }}</v-icon>
            </v-btn>
        </v-app-bar>
        <v-content>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-content>
        <v-footer app>
            <span>Created by <a href="https://enotcode.com" target="_blank">enotcode</a></span>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        computed: {
            icon: function () {
                if (this.$vuetify.theme.dark) {
                    return "wb_sunny"
                } else {
                    return "brightness_2"
                }
            }
        },
        mounted: function () {
            const theme = localStorage.getItem("useDarkTheme");
            if (theme) {
                this.$vuetify.theme.dark = theme === "true";
            }
        },
        methods: {
            change_color() {
                this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
                localStorage.setItem("useDarkTheme", this.$vuetify.theme.dark.toString())
            },
        },
    }
</script>
