const update = (state = {}, action) => {
  switch (action.type) {
    case "INCREMENT":
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        count: state.count + 1
      };
    case "DECREMENT":
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        count: state.count - 1
      };

    case "RESET":
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        count: 0
      };
    default:
      return state;
  }
};

let nextId = 0;

const counterReducer = (state = { selected: null, counters: [] }, action) => {
  switch (action.type) {
    case "ADD":
      return { selected: state.selected, counters: [...state.counters, { id: nextId++, count: 0 }] };
    case "REMOVE":
      return { selected: null, counters: state.counters.filter(item => item.id !== action.id) };
    case "INCREMENT":
      return { selected: state.selected, counters: state.counters.map(counter => update(counter, action)) };
    case "DECREMENT":
      return { selected: state.selected, counters: state.counters.map(counter => update(counter, action)) };
    case "RESET":
      return { selected: state.selected, counters: state.counters.map(counter => update(counter, action)) };
    case "SELECT":
      return { selected: action.id, counters: state.counters };
    default:
      return state;
  }
}

export default counterReducer;