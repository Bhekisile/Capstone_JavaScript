import { saveLikes, handleSaveLikes } from './handleLikes.js';

const likesListener = function (recipe, appId) {
  const likesBtns = document.querySelectorAll('.likesBtn');
  const countLikes = document.querySelectorAll('.likes-value');
  const countLike = countLikes[countLikes.length - 1];
  const likesBtn = likesBtns[likesBtns.length - 1];
  let count = 0;

  const updateLikesUI = async (likes) => {
    countLike.textContent = `${likes} likes`;
  };

  const saveLikesToBackend = async (appId, itemId, likesNum) => {
    await saveLikes(appId, itemId, likesNum);
  };

  const handleLikeClick = async () => {
    const itemId = recipe.idMeal;
    count += 1;

    await saveLikesToBackend(appId, itemId, count);
    await handleSaveLikes(appId, itemId);

    updateLikesUI(count);
  };

  likesBtn.addEventListener('click', handleLikeClick);
};

export default likesListener;