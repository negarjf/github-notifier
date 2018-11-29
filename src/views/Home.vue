<template>
    <HelloWorld/>
</template>

<script>
    import HelloWorld from '../components/HelloWorld'

    export default {
        components: {
            HelloWorld
        },
        created(){
            this.$electron.ipcRenderer.on('logout', () => {
                this.$router.push('/logout')
            })
        }
    }
</script>
