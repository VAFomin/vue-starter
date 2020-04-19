<template>
    <div class="v-container pa-4">
        <v-layout class="text-xs-center" column="column" justify-center="justify-center" align-center="align-center">
            <v-flex xs12="xs12" md10="md10">
                <div class="headline pb-4">
                    <h1>Home</h1>
                </div>
                <g-signin-button
                        :params="{client_id: '901060617777-1nic5bknq28bi7ohhj9k66398hlqtvp4.apps.googleusercontent.com'}"
                        @success="onSignInSuccess"
                        @error="onSignInError">
                    Sign in with Google
                </g-signin-button>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
        methods: {
            onSignInSuccess(googleUser) {
                const profile = googleUser.getBasicProfile();
                console.log(profile);
                this.$router.replace("page");
            },
            onSignInError(error) {
                console.log('OH NOES', error)
            }
        }
    }
</script>

<style>
    .g-signin-button {
        display: inline-block;
        padding: 4px 8px;
        border-radius: 3px;
        background-color: #3c82f7;
        color: #fff;
        box-shadow: 0 3px 0 #0f69ff;
        cursor: pointer;
    }
</style>
