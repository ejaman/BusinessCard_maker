import app from "./firebaseAuth";

class CardRepo {
  syncCards(userId, onUpdate) {
    const ref = app.database().ref(`${userId}/cards`);
    ref.on("value", (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  }
  saveCard(userId, card) {
    app.database().ref(`${userId}/cards/${card.id}`).set(card);
  }
  deleteCard(userId, card) {
    app.database().ref(`${userId}/cards/${card.id}`).remove();
  }
}
export default CardRepo;
