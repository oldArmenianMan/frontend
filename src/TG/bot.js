const axios = require('axios');

const getChannelPosts = async () => {
  const token = "";
  const channelId = 'MoreHassanMat';
  const apiUrl = `https://api.telegram.org/bot${token}/getUpdates`;

  try {
    const response = await axios.get(apiUrl);
    // Обработка данных из ответа, например, отображение на вашем сайте
    console.log(response.data);
  } catch (error) {
    console.error('Ошибка при запросе к API Telegram:', error);
  }
};