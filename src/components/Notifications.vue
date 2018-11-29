<template>
    <div>
        <v-container>
            <v-layout row wrap justify-center>
                <v-flex sm8>
                    <!-- swipe right section -->
                    <v-card class="mb-5" v-if="itemsRight.length">
                        <v-list class="pa-0">
                            <template v-for="(item, index) in itemsRight">
                                <SwipeoutItem
                                        :item="item"
                                        direction="right"
                                        :id="`item-right-${item}`"
                                        :key="`item-right-${item}`"
                                        @transitionEnd="transitionEnd(itemsRight, index)"
                                />
                                <v-divider
                                        v-if="index + 1 < itemsRight.length"
                                        :key="`divider-right-${item}`"
                                />
                            </template>
                        </v-list>
                    </v-card>

                    <!-- swipe left section -->
                    <v-card class="mb-5" v-if="itemsLeft.length">
                        <v-list class="pa-0">
                            <template v-for="(item, index) in itemsLeft">
                                <SwipeoutItem
                                        :item="item"
                                        direction="left"
                                        :id="`item-left-${item}`"
                                        :key="`item-left-${item}`"
                                        @transitionEnd="transitionEnd(itemsLeft, index)"
                                />
                                <v-divider
                                        v-if="index + 1 < itemsLeft.length"
                                        :key="`divider-left-${item}`"
                                />
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

    const itemsRight = [ 1, 2, 3, 4 ]
    const itemsLeft = [ 5, 6, 7, 8 ]

    export default {
        name: "Notifications",
        components: {
            SwipeoutItem
        },
        data () {
            return {
                itemsRight: itemsRight.slice(),
                itemsLeft: itemsLeft.slice()
            }
        },
        methods: {
            transitionEnd (array, index) {
                // Delete item from array after callback from SwipeoutItem
                console.log('Delete item - ' + array[index])
                array.splice(index, 1)
            },
            resetData () {
                this.itemsRight = itemsRight.slice()
                this.itemsLeft = itemsLeft.slice()
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>