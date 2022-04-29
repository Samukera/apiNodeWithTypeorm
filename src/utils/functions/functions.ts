export const createFilterCity = (name: string, state: number) => {
  if (name && state) {
    return { name, state };
  }

  if (state) {
    return { state };
  }

  if (name) {
    return { name };
  }

  return undefined;
};

export const createFilterClient = (clientId: number, name: string) => {
  if (clientId && name) {
    return { clientId, name };
  }
  if (name) {
    return { name };
  }
  if (clientId) {
    return { clientId };
  }

  return undefined;
};
