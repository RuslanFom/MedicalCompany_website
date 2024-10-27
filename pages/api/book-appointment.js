import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { services, examinationType, date, time, clientData } = req.body;

    // Настройка транспорта для отправки email
    let transporter = nodemailer.createTransport({
      host: "your-smtp-host",
      port: 587,
      secure: false,
      service: 'gmail',
      auth: {
        user: "ruslanfom@gmail.com",
        pass: "cang bwhl ufel lnxm",
      },
    });
      
    // Формирование содержимого email
    let mailOptions = {
      from: '"CompanyMedics" <ruslanfom@gmail.com>',
      to: "ruslanfom@gmail.com",
      subject: "Neue Terminbuchung",
      text: `
        Neue Terminbuchung:
        Services: ${services.map(s => s.title).join(', ')}
        Untersuchungstyp: ${examinationType}
        Datum: ${date}
        Zeit: ${time}
        Kundeninformationen:
        Name: ${clientData.firstName} ${clientData.lastName}
        E-Mail: ${clientData.email}
        Telefon: ${clientData.phone}
        Geschlecht: ${clientData.gender}
      `,
    };

    try {
      // Отправка email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Бронирование успешно' });
    } catch (error) {
      console.error('Ошибка отправки email:', error);
      res.status(500).json({ message: 'Ошибка при бронировании'});
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}