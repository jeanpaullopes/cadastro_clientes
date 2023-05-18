<template>
  <q-page>
    <h3>Clientes</h3>
    {{ mostraDiv }}
    <q-btn @click="mostraDiv = !mostraDiv">Novo Cliente</q-btn>
    <FormCliente
      v-show="mostraDiv"
      @salvarCliente="onSalvarCliente"
      @cancelarCliente="this.mostraDiv = false"
    />

    <ul>
      <li v-for="cliente in clientesLocal" :key="cliente.id">
        {{ cliente.nome }}
      </li>
    </ul>
  </q-page>
</template>

<script>
import controllerClientes from "../controllers";
import fakeControler from "src/controllers/fakeController";

import FormCliente from "../components/FormCliente.vue";

export default {
  name: "ClientesHome",
  components: {
    FormCliente,
  },
  data() {
    return {
      clientesLocal: [],
      mostraDiv: false,
      controlador: Object,
    };
  },
  created() {
    if (1 == 2) {
      this.controlador = fakeControler;
    } else {
      this.controlador = controllerClientes;
    }
    this.controlador.getAllClientes(
      (clientes) => (this.clientesLocal = clientes)
    );
  },
  methods: {
    onSalvarCliente(cliente) {
      console.log("onSalvarCliente");
      console.log(cliente);
      controllerClientes.salvarCliente(cliente);
      this.mostraDiv = false;
    },
  },
};
</script>

<style></style>
