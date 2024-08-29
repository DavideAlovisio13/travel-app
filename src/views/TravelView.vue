<template>
    <div>
        <ul>
            <li v-for="item in db" :key="item.id">{{ item.viaggio }}</li>
        </ul>
    </div>
</template>

<script>
import db from "../db"
    export default {
        name: "TravelView",
        data() {
            return {
                db
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>