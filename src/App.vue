<template>
  <main :class="$style.main">
    <TheHeader />
    <TheContainer>
      <p>
        Lina on väga hea soojusjuht, juhtides soojust 5 korda paremini kui vill ja 19 korda paremini kui siid. Linane
        kangas on antibakteriaalne ja higistamisvastane (inimesed higistavad 1,5 korda vähem kui puuvillaseid riideid
        kandes). Linased riided takistavad gammakiirguse kahjulikku toimet kuni 50% osas ning samuti peegeldab linane
        kangas päikesekiirguse kogu spektrit. Linane kangas vähendab staatilist elektrit ja absorbeerib ioniseerivat
        kiirgust. Jaapanis läbiviidud uuringud näitavad, et kasutades linasest kangast voodiriideid, ei teki
        voodihaigetel lamatisi. Nahaarstid mujal maailmas soovitavad linaseid riideid ka inimestele, kel on kroonilised
        nahahaiguslikud seisundid nagu psoriaas, ekseem jne. Linased riided säilivad hästi, peale pesemist muutuvad
        pehmemaks, lina imab hästi niiskust ja kuivab kiiresti. Lina on kasulik inimese tervisele ja linasest riiest
        tooteid on mugav kasutada.
      </p>
      <div :class="$style.facts">
        <p>
          Üldised soovitused lina pesemisel ja hooldamisel: Linasest riidest toodete pesemisel võib kasutada tavalisi
          pesupulbreid, järgides tootjapoolseid soovitusi nende pesemisvahendite kasutamisel:
        </p>
        <div :class="$style.card">
          <Card color="grey">
            <div :class="$style.cardItems">
              <div :class="$style.cardItem">Valgeid linaseid kangaid võib pesta temperatuuril 95°C</div>
              <div :class="$style.cardItem">
                Tähelepanu on vaja pöörata väljaõmblusega linastele riietele. Selliseid tooteid soovitatakse pesta
                temperatuuril mitte üle 40°C käsitsi või automaatsetes pesumasinates selleks määratud „delikaatse pesu”
                režiimil.
              </div>
              <div :class="$style.cardItem">Värvilisi linaseid kangaid pesta temperatuuril 60°C</div>
            </div>
          </Card>
        </div>
      </div>
      <p :class="$style.facts">
        Tänu naturaalse lina omadustele kuivavad linased kangad väga kiiresti. Triikimisel võib kasutada tavalisi
        temperatuuri reziime, triikides kergelt niisket riiet või kasutades triikraua aurufunktsiooni. Enne triikimist
        on vaja riie hästi laiali laotada, kergelt venitades tema normaalsete mõõtmeteni. Triikida tuleb pahempoolsest
        küljest, eriti on vaja seda teha värviliste riiete puhul.
      </p>
      <div :class="$style.productsCard">
        <Card> Meie tooted </Card>
      </div>
    </TheContainer>
    <TheContainer :no-background="true">
      <div :class="$style.contacts">
        <Card> kontakt </Card>
      </div>
    </TheContainer>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Card from "@/components/Card.vue";

import TheContainer from "@/containers/TheContainer.vue";
import TheHeader from "@/containers/TheHeader.vue";

export default defineComponent({
  name: "App",
  components: {
    Card,
    TheContainer,
    TheHeader,
  },
});
</script>

<style lang="scss" module>
.main {
  height: 100%;
  background-image: url("@/assets/images/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  background-attachment: fixed;
  text-align: center;
  line-height: 35px;
  letter-spacing: 0.5px;

  p {
    font-size: 20px;
  }
}
.facts,
.productsCard {
  margin-top: 5em;
}
.card {
  margin-top: 1.5em;
}
.cardItems {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  text-align: left;

  @media (min-width: $break-lg) {
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
  }
}
.cardItem {
  display: flex;
  align-items: center;
}
.contacts {
  margin: 0 auto;
  max-width: 850px;
}
</style>
