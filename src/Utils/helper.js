export const convertDate = (date) => {
  return null;
};

export const collectIdsAndDataPosts = (doc) => ({
  id: doc.id,
  ...doc.data(),
  checked: false,
});

export const collectIdsAndDataDrafts = (doc) => ({
  id: doc.id,
  ...doc.data(),
  checked: false,
});
