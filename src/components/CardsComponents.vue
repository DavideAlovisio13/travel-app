<template>
  <div>
    <div class="card" style="width: 18rem">
      <img :src="img" class="card-img-top" alt="..." />
      <p class="card-text">
        {{ nome }}
      </p>
      <div class="card-body"></div>
    </div>
  </div>
</template>

<script>
import db from "../db";
export default {
  name: "CardsComponents",
  props: ["nome", "citta", "descrizione", "categoria", "img"],
  data() {
    return {
      db,
    };
  },
};
</script>

<style lang="scss" scoped></style>
