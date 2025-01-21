
export const  decNumber  = () => {
  return{
    type: 'DECREMENT'
  };
}

export const  incNumber  = (num) => {
    return {
      type: 'INCREMENT',
      payload: num // add payload to the action object for more complex actions.
    };
  };
  

