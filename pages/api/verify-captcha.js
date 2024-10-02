export default async function handler(req, res) {
  const token = req.body.token;

  if (!token) {
    return res.status(400).json({ success: false, message: "Token is missing" });
  }

  // Ваш секретный ключ Hcaptcha
  const secret = process.env.HCAPTCHA_SECRET_KEY;

  try {
    const response = await fetch(`https://hcaptcha.com/siteverify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `response=${token}&secret=${secret}`,
    });

    const data = await response.json();

    if (data.success) {
      // Капча прошла валидацию
      return res.status(200).json({ success: true });
    } else {
      // Капча не прошла валидацию
      return res.status(400).json({ success: false, message: "Captcha verification failed" });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
