<template>
  <ion-page>
    <ion-list>
      <ion-item v-for="grocery in groceries" :key="grocery.name">
        <ion-label>{{ grocery.name }} ({{ grocery.quantity }})</ion-label>
      </ion-item>
    </ion-list>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage, IonList, IonItem, IonLabel,
} from '@ionic/vue';
import {getGroceries} from "@/data/groceries";

export default {
  name: "Tab1View",
  components: {
    IonPage,
    IonList,
    IonItem,
    IonLabel,
  },
  data: () => ({
    groceries: getGroceries(),
  }),
}
</script>

<style scoped>

</style>