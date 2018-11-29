<template>
    <div></div>
</template>
<script>
    export default {
        name: 'auth-logout',

        created(){

            this.$store.dispatch('auth/logout')
                .then(() => {
                    this.$router.push({ name: 'login' })
                })

        }
    }
</script>