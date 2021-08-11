const baseURL = "http://localhost:3000";

function fetchJson(url, options) {
    return fetch(url, options).then((r) => {
      if (r.ok) {
        return r.json();
      } else {
        throw new Error(r.statusText);
      }
    }).catch(error => {
      showError("Error loading data", error);
      throw error;
    })  ;
  }

function listEmployees() {
    return fetchJson(`${baseURL}/employees`);
}

function listRoles() {
    return fetchJson(`${baseURL}/roles`);
}

function updateEmployee(id, employee) {

  return fetchJson(`${baseURL}/employees/${id}`, {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(employee),
  });

}

function createEmployee(employee) {

  return fetchJson(`${baseURL}/employees`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(employee),
  });

}

function deleteEmployee(id) {
  
  return fetchJson(`${baseURL}/employees/${id}`, {
  method: "DELETE",
});

}
/*
// Criar
fetch(`http://localhost:3000/employees`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(employee),
});

// Atualizar
fetch(`http://localhost:3000/employees/${id}`, {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(employee),
});

// Excluir
fetch(`http://localhost:3000/employees/${id}`, {
  method: "DELETE",
});
*/
