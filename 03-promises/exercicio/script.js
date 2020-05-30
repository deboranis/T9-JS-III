const promise = new Promise((resolve, reject) => {
<<<<<<< HEAD
    if (condicao) {
        resolve("resolvido!"); // dado é retornado para o then
    } else {
        reject("aaahh errooou"); // entra no catch
    }
});

promise
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
=======
  if (false) {
    resolve("resolvido!"); // dado é retornado para o then
  } else {
    reject("aaahh errooou"); // entra no catch
  }
});

promise
  .then(
    (resolveUm) => {console.log(resolveUm)}
  )
  .catch((err) => {console.log(err)})
>>>>>>> 997cb2a56e68ad810efb551bd54b16b4978e7148
