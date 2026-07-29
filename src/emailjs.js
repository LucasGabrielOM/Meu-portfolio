// src/emailjs.js
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export const sendEmail = async ({ name, email, message }) => {
  try {
    const result = await emailjs.send(
      'service_idf27jh',    // substitua pelo seu Service ID
      'template_2qmbwkk',   // substitua pelo seu Template ID
      {
        from_name: name,
        reply_to: email,
        message: message,
      },
      '5S4hbxuyHcA8tcLR0'     // substitua pela sua Public Key
    );
    return { success: true, result };
  } catch (error) {
  console.error("ERRO EMAILJS:", error);

  Swal.fire({
    title: "Erro!",
    text: "Erro ao enviar mensagem.",
    icon: "error",
    confirmButtonColor: "#6366f1",
  });
}

  
};
