<template>
  <q-card>
    {{ nome }}
    <q-input standout=" bg-secondary text-white" v-model="nome" label="Nome" />
    <q-input
      standout=" bg-secondary text-white"
      v-model="cpfCnpj"
      label="CPF/CNPJ"
    />
    <q-input
      standout=" bg-secondary text-white"
      v-model="email"
      label="Email"
    />
    <q-input standout=" bg-secondary text-white" v-model="fone" label="Fone" />
    <q-input standout=" bg-secondary text-white" v-model="fone2" label="Fone" />

    <q-separator dark />

    <q-card-actions>
      <q-btn flat @click="salvar">Salvar</q-btn>
      <q-btn flat @click="cancelar">Cancelar</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: "FormCliente",
  data() {
    return {
      nome: "",
      cpfCnpj: "",
      email: "",
      fone: "",
      fone2: "",
    };
  },
  methods: {
    salvar() {
      console.log("salvar");
      let arr = [];
      if (this.fone2.length > 0) {
        arr.push(this.fone2);
      }
      if (this.fone.length > 0) {
        arr.push(this.fone);
      }
      let obj = {
        nome: this.nome,
        documento: this.cpfCnpj,
        email: this.email,
        fones: arr,
        tipo: "F",
        categoria: "Prospect",
      };
      console.log(obj);
      this.$emit("salvarCliente", obj);
      this.limpaForm();
    },
    cancelar() {
      this.$emit("cancelarCliente");
      this.limpaForm();
    },
    limpaForm() {
      this.nome = "";
      this.email = "";
      this.cpfCnpj = "";
      this.fone = "";
      this.fone2 = "";
    },
  },
};
</script>

<style></style>
