document.addEventListener('DOMContentLoaded', function() {
    var stripe = Stripe('pk_test_51NSbDoCXOrI3uSA2i5HF45Qp3k0kluSayDDEftdWpHPQ01zp1olhFBohIFay7H26SpeedFb2rxvarBJTgV92oy2W00SUxAg15b');
    var form = document.getElementById('formularioPago');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      stripe.createToken('card', {
        number: document.getElementById('numeroTarjeta').value,
        exp_month: document.getElementById('mesVencimiento').value,
        exp_year: document.getElementById('anioVencimiento').value,
        cvc: document.getElementById('codigoSeguridad').value
      }).then(function(result) {
        if (result.error) {
          console.error(result.error.message);
        } else {
          // Envía el token a tu servidor para procesar el pago
          var token = result.token;
          // Aquí debes realizar una petición AJAX o enviar el token a tu servidor para procesar el pago
          console.log(token);
        }
      });
    });
  });
  
