const actionMaker = (type) => {
  return (payload = {}) => ({
    type,
    payload
  });
};

export default actionMaker;