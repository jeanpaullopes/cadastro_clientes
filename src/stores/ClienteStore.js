import { defineStore } from "pinia";

const useClienteStore = defineStore("cliente", {
  state: () => ({
    clientes: [],
  }),
  getters: {
    //doubleCount: (state) => state.counter * 2,
  },
  actions: {
    addCliente(cliente) {
      this.clientes.push(cliente);
    },
    deleteCliente(cliente) {
      this.clientes.splice(this.clientes.indexOf(cliente), 1);
    },
  },
});

const clienteStore = useClienteStore();
export default clienteStore;
