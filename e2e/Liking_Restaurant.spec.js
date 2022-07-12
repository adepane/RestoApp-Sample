/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before((I) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', (I) => {
  I.seeElement('#daftar-resto');
  I.see('You do not have a favorite restaurant yet', '#daftar-resto');
});

Scenario('Liking one restaurant', async (I) => {
  I.see('You do not have a favorite restaurant yet', '#daftar-resto');

  I.amOnPage('/');
  I.seeElement('#to-main-content');
  I.click(locate('#to-main-content'));
  I.seeElement('article');
  const firstItem = locate('.card-header a').first();
  const firstTitle = await I.grabTextFrom(firstItem);
  I.click(firstItem);
  I.seeElement('#likeButton');
  I.click(locate('#likeButton'));

  I.amOnPage('/#/favorite');
  I.seeElement('article');
  const likedTitle = await I.grabTextFrom('.card-header a');
  assert.strictEqual(firstTitle, likedTitle);
});

Scenario('Unliking one restaurant', async (I) => {
  I.see('You do not have a favorite restaurant yet', '#daftar-resto');

  I.amOnPage('/');
  I.seeElement('#to-main-content');
  I.click(locate('#to-main-content'));
  I.seeElement('article');
  const firstItem = locate('.card-header a').first();
  const firstTitle = await I.grabTextFrom(firstItem);
  I.click(firstItem);
  I.seeElement('#likeButton');
  I.click(locate('#likeButton'));

  I.amOnPage('/#/favorite');
  I.seeElement('#to-main-content');
  I.click(locate('#to-main-content'));
  I.seeElement('article');
  const likedTitle = await I.grabTextFrom('.card-header a');
  assert.strictEqual(firstTitle, likedTitle);

  I.click(locate('.card-header a'));

  I.seeElement('#likeButton');
  I.click(locate('#likeButton'));

  I.amOnPage('/#/favorite');
  I.seeElement('#daftar-resto');

  const noFavorite = await I.grabTextFrom('#daftar-resto');

  assert.strictEqual(noFavorite, 'You do not have a favorite restaurant yet');
});

Scenario('Customer write review', async (I) => {
  I.see('You do not have a favorite restaurant yet', '#daftar-resto');

  I.amOnPage('/');
  I.seeElement('#to-main-content');
  I.click(locate('#to-main-content'));
  I.seeElement('.card-header');
  I.click(locate('.card-header a').first());
  I.seeElement('#send-review');
  pause();
  I.fillField('reviewer_name', 'Ade Pane');
  I.fillField('reviewer_comment', 'Resto Asik');
  I.seeElement('#sendform');
  I.click(locate('#sendform'));

  const successComment = await I.grabTextFrom('#customer-comment');

  assert.strictEqual(successComment, 'Thanks for your review');
});
