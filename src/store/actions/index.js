export const setToken = (token) => {
  return {
    type: "SET_TOKEN",
    payload: token,
  };
};

export const setUser = (user) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};

export const setCompany = (company) => {
  return {
    type: "SET_COMPANY",
    payload: company,
  };
};

export const setContribution = (contribution) => {
  return {
    type: "SET_CONTRIBUTION",
    payload: contribution,
  };
};
