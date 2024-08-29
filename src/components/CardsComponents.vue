<template>
  <div>
    <router-link :to="{ name: 'traveldetail', params: { id: id } }">
      <div
        class="card position-relative m-3 mb-0"
        style="width: 10rem; height: 5rem"
      >
        <img
          :src="img"
          class="card-img-top"
          alt="..."
          style="object-fit: cover; width: 100%; height: 100%"
        />
        <div id="title">
          <p class="card-text">
            {{ nome }}
          </p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import db from "../db";
export default {
  name: "CardsComponents",
  props: ["nome", "citta", "descrizione", "categoria", "img", "id"],
  data() {
    return {
      db,
    };
  },
};
</script>

<style lang="scss" scoped>
#title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}
</style>
