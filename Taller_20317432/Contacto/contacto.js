function display() {
    message = "Nombre: " + document.form.name.value +"\n";
    message += "Email: " + document.form.email.value+"\n";
    message += "Telefono: " + document.form.phone.value+"\n";
    window.alert(message);
}