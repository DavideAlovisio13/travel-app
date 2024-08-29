<template>
    <div>
        
    </div>
</template>

<script>
import CardsComponents from "@/components/CardsComponents.vue";
import db from "../db";
    export default {
        name: "DetailsView",
        components: {
            CardsComponents
        },
        data() {
            return {
                db,
            };
        },
    }
</script>

<style lang="scss" scoped>

</style>