<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>List</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen>
      <!--      ADD ITEM NAME INPUT-->
      <ion-item>
        <ion-label>Item name</ion-label>
        <ion-input v-model="itemName"></ion-input>
      </ion-item>
      <!--      ADD ITEM QUANTITY INPUT-->
      <ion-item>
        <ion-label>Item quantity</ion-label>
        <ion-input type="number" v-model="itemQuantity"></ion-input>
      </ion-item>
      <!--      ADD ITEM BUTTON-->
      <ion-button :disabled="addItemBtnDisabled" expand="block" @click="addItem">Add item</ion-button>
      <!--      THE LIST-->
      <ion-list>
        <!--        Enable item sliding-->
        <ion-item-sliding v-for="(grocery, index) in groceries" :key="grocery.name">
          <ion-item>
            <ion-label>{{ grocery.name }} ({{ grocery.quantity }})</ion-label>
          </ion-item>
          <!--          Incorporate a delete button in each item-->
          <ion-item-options>
            <ion-button @click="editItem(index)" color="success">
              Edit
            </ion-button>
            <ion-button @click="deleteItem(index)" color="danger">
              Delete
            </ion-button>
          </ion-item-options>
        </ion-item-sliding>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage, IonList, IonItem, IonLabel, IonInput, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonItemSliding, IonItemOptions
} from '@ionic/vue';
import {getGroceries} from "@/data/groceries";

export default {
  name: "Tab1View",
  components: {
    IonInput,
    IonPage,
    IonList,
    IonItem,
    IonLabel,
    IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonItemSliding, IonItemOptions
  },
  data: () => ({
    groceries: getGroceries(),
    itemName: '',
    itemQuantity: '',
  }),
  methods: {
    // ADD ITEM FUNCTION
    addItem() {
      const groceries = this.groceries;
      groceries.push({name: this.itemName.trim(), quantity: parseInt(this.itemQuantity)})
      this.itemName = ''
      this.itemQuantity = ''
    },
    // DELETE ITEM FUNCTION
    deleteItem(itemIndex) {
      this.groceries.splice(itemIndex, 1)
    },
    editItem(itemIndex) {
      let item = prompt("Please edit your item:", this.groceries[itemIndex].name);
      this.groceries[itemIndex].name = item;
    },
  },
  computed: {
    addItemBtnDisabled(): boolean {
      return !this.itemName || !this.itemQuantity
    }
  },

}
</script>

<style scoped>

</style>