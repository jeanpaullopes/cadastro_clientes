<template>
  <q-page class="flex flex-center">
    <q-btn to="/clientes">Clientes</q-btn>

    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
  </q-page>
</template>

<script>
import controllerClientes from "src/controllers";
import fakeControler from "src/controllers/fakeController";
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      controlador: Object,
    };
  },
  created() {
    if (1 == 2) {
      this.controlador = fakeControler;
    } else {
      this.controlador = controllerClientes;
    }
    console.log("antes de chamar servico no indexPage");
    this.controlador.getAllClientes();
    console.log("depois de chamar servico no indexPage");
  },
});
</script>
