$(document).ready(function () {
  $("#basic-form").validate({
    rules: {
      rut: {
        required: true,
        minlength: 9,
        maxlength: 10
      },

      edad: {
        required: true,
        number: true,
        min: 18,
        max: 35
      },

      nombre: {
        required: true,
        minlength: 3,
        maxlength: 20
      },


      Apellido_paterno: {
        required: true,
        minlength: 3,
        maxlength: 20
      },

      Apellido_materno: {
        required: true,
        minlength: 3,
        maxlength: 20
      },

      telefono: {
        required: true,
        minlength: 9,
        maxlength: 12,
        number: true
      },

      email: {
        required: true,
        email: true
      },

      Genenero: {
        required: true
      },
      Motivacion: {
        required: true,
        minlength: 5,
        maxlength: 30,
        lettersonly: true
    },


    },
    messages: {
      rut: {
        required: "Ingrese El Rut",
        minlength: "El rut tiene que ser de 9 a 10 dígitos y solo puede contener numeros, letras y guion bajo.",
        maxlength: "El nombre tiene que ser de 9 a 10 dígitos y solo puede contener numeros, letras y guion bajo."
      },
      edad: {
        required: "Ingrese la edad",
        number: "debe ser solo numeros",
        min: "la edad minima es de 18 años",
        max: "la edad maxima es de 35 años"
      },
      email: {
        required: "Ingrese El email",
        email: "El correo debe estar en el formato: abc@mail.com"
      },

      nombre: {
        required: "Ingrese El nombre",
        minlength: "El nombre tiene que ser de 3 a 20 dígitos y solo puede contener letras.",
        maxlength: "El nombre tiene que ser de 3 a 20 dígitos y solo puede contener letras."
      },
      Apellido_paterno: {
        required: "Ingrese el Apellido paterno",
        minlength: "El Apellido tiene que ser de 3 a 20 dígitos y solo puede contener letras.",
        maxlength: "El Apellido tiene que ser de 3 a 20 dígitos y solo puede contener letras."
      },
      Apellido_materno: {
        required: "Ingrese el Apellido materno",
        minlength: "El Apellido paterno tiene que ser de 3 a 20 dígitos y solo puede contener letras.",
        maxlength: "El Apellido materno tiene que ser de 3 a 20 dígitos y solo puede contener letras."
      },
      telefono: {
        required: "Ingrese el numero de celular",
        minlength: "El numero de celular tiene que ser de 9 a 12 dígitos y solo puede contener numeros",
        maxlength: "El numero de celular tiene que ser de 9 a 12 dígitos y solo puede contener numeros",
        number: "El numero de celular tiene que ser de 9 a 12 dígitos y solo puede contener numeros"
      },
      Genenero: {
        required: "Debe seleccionar un genero de la lista"
      },
      Motivacion: {
        required: "Debe ingresar sus motivaciones"
      },
    },
    errorElement : 'span'
  });
});










