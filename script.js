"use strict";

// console.log(document.querySelector(".Cantidad").value);
// document.querySelector(".Cantidad").value = 23;

document.querySelector("#inputA").addEventListener("click", function () {
  const cantidad = Number(document.querySelector(".Cantidad").value);
  const categoria = document.querySelector("#categoria").value;

  if (categoria === "estudiante") {
    // document.querySelector("#total").value = ;
    const total1 = cantidad * 160;
    console.log(total1);
    // const total = (document.querySelector("#total").value = total1);
    document.querySelector("#total").value = total1;
  } else if (categoria === "trainee") {
    const total2 = cantidad * 100;
    document.querySelector("#total").value = total2;
  } else if (categoria === "junior") {
    const total3 = cantidad * 30;
    document.querySelector("#total").value = total3;
  }
});

//   //   console.log(cantidad);
//   //   console.log(categoria);
//   if ((categoria = "estudiante")) {
//     const Precio = 160;
//   }
//   //   else if ((categoria = "trainee")) {
//   //     const trainee = 100;
//   //   } else if ((categoria = "junior")) {
//   //     const junior = 30;
//   //   }

//   console.log(estudiante);
//   console.log(trainee);
//   console.log(junior);
// });

// //   console.log(cantidad, typeof cantidad);

//   if (!cantidad) {
//     document.querySelector("#total").textContent =
//       "Seleccionar Cantidad y Categoría";
//   } else if {

//   }
// });

// const estudiante = 160
// const trainee = 100
// const junior = 30

// document.querySelector("#inputPasswo").textContent = "correct number!";

// document.querySelector("#XX").addEventListener("click", function () {
//   console.log(document.querySelector("#XX").value);
// });
