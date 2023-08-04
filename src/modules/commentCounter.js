const apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const appId ='PcK1Dh40SP7TXwIQhwoT'
const getCommentCount = async (itemId) => {
  const response = await fetch(
    `${apiUrl}apps/${appId}/comments?item_id=${itemId}`,
  );
  const data = await response.json();
  return data.length;
};

export default getCommentCount;