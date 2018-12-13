<template>
    <div>
        <v-container>
            <v-layout row wrap justify-center>
                <v-flex sm10>
                    <!-- swipe right section -->
                    <v-card class="mb-5">
                        <v-list class="pa-0">
                            <template v-for="(item, index) in notifications">
                                <SwipeoutItem
                                        :title="item.subject.title"
                                        :url="item.subject.url"
                                        :repository="item.repository.full_name"
                                        :type="item.subject.type"
                                        :id="item.id"
                                        :key="item.id"
                                        @transitionEnd="transitionEnd(notifications, index)"
                                />
                                <!--<v-divider-->
                                        <!--v-if="index + 1 < notifications.length"-->
                                        <!--:key="`divider-${item.id}`"-->
                                <!--/>-->
                                
                            </template>
                        </v-list>
                    </v-card>

                </v-flex>
            </v-layout>

        </v-container>

    </div>
</template>

<script>
    import SwipeoutItem from '@/components/SwipeoutItem'
    import NotificationsService from '@/services/NotificationsService'

    export default {
        name: "Notifications",
        components: {
            SwipeoutItem
        },
        data () {
            return {
                notifications: [],
            }
        },

        created(){
            NotificationsService.fetchAll().then(response =>{
                console.log(response.data);
                this.notifications = response.data;
            }).catch(error=>{
                console.log(error);
            })
        },

        methods: {
            transitionEnd (array, index) {
                // Delete item from array after callback from SwipeoutItem
                console.log('Delete item - ' + array[index].subject.title)
                array.splice(index, 1)
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>