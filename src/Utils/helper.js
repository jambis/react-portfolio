export const convertDate = (date) => {
  return null;
};

export const collectIdsAndDocs = (doc) => {
  return { id: doc.id, ...doc.data() };
};
