<template>
  <div >
    <section style="overflow: hidden;">
      <video
        src="/videos/viaggi.mp4"
        loop
        autoplay
        muted
        style="
          width: 100%;
          height: 100vh;
          object-fit: cover;
          z-index: -1;
          position: absolute;
        "
      ></video>
      <div>
        <CardsComponents v-for="card in db[0].luoghi" :key="card.nome" :nome="card.nome" :citta="card.città" :descrizione="card.descrizione" :categoria="card.categoria" :img="card.immagine" />
      </div>
      <div></div>
      <div></div>
    </section>
  </div>
</template>

<script>
import CardsComponents from '@/components/CardsComponents.vue';
import db from "../db";
export default {
  name: "TravelView",
  components: {
    CardsComponents,
  },
  data() {
    return {
      db,
    };
  },
};
</script>

<style lang="scss" scoped></style>
