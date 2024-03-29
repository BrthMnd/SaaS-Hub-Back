export const TemplateHtml = (toEmail, Title, parr) =>
  `

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: 'Arial', sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }

    div {
      background-color: #ffffff;
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    h1 {
      color: #333333;
      text-align: center;
    }

    strong {
      color: #007bff;
    }

    p {
      color: #555555;
      text-align: center;
    }
  </style>
</head>

<body>
  <div>
    <h1>${Title}</h1>
    <strong>${toEmail}</strong>
    <br>
    <p>${parr}</p>
  </div>
</body>
`;
export function TemplateEmail(
  email,
  details,
  token,
  url = "confirmacion_correo/"
) {
  return `
  <!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Correo de Confirmación</title>
</head>
<body style="font-family: 'Arial', sans-serif; margin: 0; padding: 0; background-color: #ffffff; color: #000000; text-align: center;">
  <div id="email___content" style="max-width: 600px; margin: 40px auto; padding: 20px; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1); border-radius: 8px; border: 1px solid #d1d9e6;">
  <h2 style="color: #333; font-size: 24px; margin-bottom: 10px;">Hola <strong style="font-weight: bold;">${email}</strong></h2>
  // <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">${details}</p>
    
    <p class="footer" style="font-size: 12px; color: #777; margin-top: 20px;">Si no solicitaste este correo, por favor ignóralo.</p>
  </div>
</body>
</html>

    `;
}
export const TemplateRecoveryPassword = (toEmail, Title, parr) =>
  `

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: 'Arial', sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }

    div {
      background-color: #ffffff;
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    h1 {
      color: #333333;
      text-align: center;
    }

    strong {
      color: #007bff;
    }

    p {
      color: #555555;
      text-align: center;
    }
  </style>
</head>

<body>
  <div>
    <h1>${Title}</h1>
    <strong>${toEmail}</strong>
    <br>
    <p>${parr}</p>
  </div>
</body>
`;

// !El NottificationTemplate funciona solo para para correos que se les envia para informacion.
export function NotificationTemplate(email, details) {
  return `
  <!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Correo de Notificacion</title>
</head>
  <body style="font-family: 'Arial', sans-serif; margin: 0; padding: 0; background-color: #ffffff; color: #000000; text-align: center;">
    <div id="email___content" style="max-width: 600px; margin: 40px auto; padding: 20px; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1); border-radius: 8px; border: 1px solid #d1d9e6;">
      <h2 style="color: #333; font-size: 24px; margin-bottom: 10px;">Hola <strong style="font-weight: bold;">${email}</strong></h2>
      <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">${details}</p>
    </div>
  </body>
</html>
    `;
}

//ToDo: Por si nacesitamos colocar una imagen
// <img src="https://" alt="Rc service Logo" style="max-width: 100px; height: 100px; display: block; margin: 0 auto 20px; border-radius: 50%; background: radial-gradient(black 60%, transparent 60%);">
//
