export const increment = (id) => {
  return {
    type: "INCREMENT",
    id
  };
};

export const decrement = (id) => {
  return {
    type: "DECREMENT",
    id
  };
};

export const reset = (id) => {
  return {
    type: "RESET",
    id
  };
};

export const add = () => {
  return {
    type: "ADD"
  };
};

export const remove = (id) => {
  return {
    type: "REMOVE",
    id
  };
};

export const removeAll = () => {
  return {
    type: "REMOVE_ALL",
  };
};

export const select = (id) => {
  return {
    type: "SELECT",
    id
  };
};