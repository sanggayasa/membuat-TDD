import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';

it('should show the like button when the movie has not been liked before', async () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    movie: {
      id: 1,
    },
  });

  expect(document.querySelector('[aria-label="like this movie"]'))
    .toBeTruthy();
  expect(document.querySelector('[aria-label="unlike this movie"]'))
    .toBeFalsy();
});
