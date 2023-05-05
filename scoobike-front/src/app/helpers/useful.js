import dayjs from "dayjs";




export const validate = (name, data, required) => {
    switch (name) {
        case "name":
        case "surname":
        case "nombre":
        case "apellido":
        case "nombrecompleto":
        case "fullname":
        case "fullName":
            if (data === "" && required === true) {
                return { message: "Rellena los campos", validated: false };
            } else if (!/[a-z]/gi.test(data)) {
                return { message: "Completa con un texto válido", validated: false };
            } else if (data.length > 50) {
                return { message: "No puede contener mas de 50 caracteres", validated: false };
            } return { message: "", validated: true };
        case "email":
        case "correo":
        case "e-mail":
            if (data === "" && required === true) {
                return { message: "Rellena los campos", validated: false };
            } else if (
                !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data)
            ) {
                return { message: "Formato mail inválido", validated: false };
            } return { message: "", validated: true };
        case "contraseña":
        case "password":
            if (data === "" && required === true) {
                return { message: "Rellena los campos", validated: false };
            } else if (data.length < 8) {
                return { message: "Contraseña debe tener al menos 8 carácteres", validated: false };
            }
            if (!(/[a-z]/.test(data))) {
                return { message: "Contraseña debe tener al menos una mayúscula", validated: false };
            }
            if (!(/[A-Z]/.test(data))) {
                return { message: "Contraseña debe tener al menos una mayúscula", validated: false };
            }
            if (!(/[0-9]/.test(data))) {
                return { message: "Contraseña debe tener al menos un número", validated: false };
            }
            if (data.length > 50) {
                return { message: "No puede contener mas de 50 caracteres", validated: false };
            } else {
                return "";
            }
        case "phone":
        case "tfno":
        case "tlfno":
        case "telefono":
        case "phonenumber":
            if (data === "" && required === true) {
                return { message: "Rellena los campos", validated: false };
            } else if (!(/[0-9]/.test(data))) {
                return { message: "Formato teléfono inválido", validated: false };
            } return { message: "", validated: true };
        default:
            console.log("Campo no reconocido");
        case "date":
            const isBeforeToday = (date) => {
                const today = dayjs();
                return dayjs(date).isAfter(today);
              };
              if (data === "" && required === true) {
                return { message: "Por favor, introduce una fecha", validated: false };
              } else if (!isBeforeToday(data)) {
                return { message: "Por favor, introduce una fecha válida", validated: false };
              } else {
                return { message: "", validated: true };
              }
    };

};