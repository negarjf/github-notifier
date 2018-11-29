<template>
    <v-app>
        <v-toolbar app color="grey lighten-3">
            <v-toolbar-title class="headline text-uppercase">
                <span>GitHub</span>
                <span class="font-weight-light">Notifier</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>

        <v-content>
            <router-view/>
            <v-bottom-nav
                    color="primary"
                    :value="true"
                    app
                    fixed
                    shift
            >
                <v-btn dark>
                    <span>Video</span>
                    <v-icon>ondemand_video</v-icon>
                </v-btn>

                <v-btn dark>
                    <span>Music</span>
                    <v-icon>music_note</v-icon>
                </v-btn>

                <v-btn dark>
                    <span>Book</span>
                    <v-icon>book</v-icon>
                </v-btn>

                <v-btn dark>
                    <span>Image</span>
                    <v-icon>image</v-icon>
                </v-btn>
            </v-bottom-nav>
        </v-content>
    </v-app>
</template>

<script>

    export default {
        name: 'App',
        data() {
            return {
                //
            }
        },
        created() {
            this.$electron.ipcRenderer.on('logout', () => {
                this.$router.push('/logout')
            })
        }
    }
</script>

<style lang="scss">
    .application{
        background: #f5f5f5 !important;
    }
</style>
