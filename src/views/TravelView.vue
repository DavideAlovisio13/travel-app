<template>
  <div>
    <section style="overflow: hidden">
      <video
        src="/videos/viaggi.mp4"
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
      <div class="d-flex w-100 h-100 justify-content-around pt-6">
        <div
          class="d-flex flex-wrap justify-content-center align-items-center vh-100"
        >
          <CardsComponents
            v-for="card in db[0].luoghi"
            :key="card.id"
            :id="card.id"
            :nome="card.nome"
            :citta="card.città"
            :descrizione="card.descrizione"
            :categoria="card.categoria"
            :img="card.immagine"
          />
        </div>
        <div
          class="d-flex flex-wrap justify-content-center align-items-center vh-100"
        >
          <CardsComponents
            v-for="card in db[1].luoghi"
            :key="card.id"
            :id="card.id"
            :nome="card.nome"
            :citta="card.città"
            :descrizione="card.descrizione"
            :categoria="card.categoria"
            :img="card.immagine"
          />
        </div>
        <div
          class="d-flex flex-wrap justify-content-center align-items-center vh-100"
        >
          <CardsComponents
            v-for="card in db[2].luoghi"
            :key="card.id"
            :id="card.id"
            :nome="card.nome"
            :citta="card.città"
            :descrizione="card.descrizione"
            :categoria="card.categoria"
            :img="card.immagine"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CardsComponents from "@/components/CardsComponents.vue";
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
