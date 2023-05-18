import api from "./apiClientes";
import clienteStore from "src/stores/ClienteStore";

const controllerClientes = {
  salvarCliente(cliente) {
    api
      .post("/clientes", cliente)
      .then((response) => {
        console.log("resposta", response.data);
        clienteStore.addCliente(response.data);
      })
      .catch((error) => {
        alert(error.message);
      });
  },
  getAllClientes(callback) {
    console.log("vai buscar os clientes");
    console.log(clienteStore.clientes);
    if (clienteStore.clientes.length == 0) {
      api
        .get("/clientes")
        .then((response) => {
          console.log("resposta", response.data);
          response.data.forEach((element) => {
            clienteStore.addCliente(element);
          });
          if (callback != undefined) {
            console.log("vai chamar o callback");
            callback(clienteStore.clientes);
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      if (callback != undefined) {
        console.log("vai chamar o callback sem chamar o get /clientes");
        callback(clienteStore.clientes);
      }
    }
  },
};
export default controllerClientes;
