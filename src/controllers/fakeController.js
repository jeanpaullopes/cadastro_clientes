const fakeController = {
  salvarCliente(cliente) {
    console.log("salvando cliente", cliente);
  },
  getAllClientes(callback) {
    if (callback != undefined) {
      console.log("vai chamar o callback sem chamar o get /clientes");
      callback([{ nome: "teste", idade: 10 }]);
    }
  },
};
export default fakeController;
