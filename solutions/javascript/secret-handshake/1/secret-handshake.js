//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const commands = (number) => {
  const actions = []

  const actionMap = {
    1: 'wink',
    2: 'double blink',
    4: 'close your eyes',
    8: 'jump'
  };

  for (const [bit, action] of Object.entries(actionMap)) {
    if (number & parseInt(bit)) {
      actions.push(action);
    }
  }

  if (number & 16) {
    actions.reverse();
  }

  return actions
};
