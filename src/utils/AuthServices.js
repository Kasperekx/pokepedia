const token = localStorage.getItem("authKey");

const Logout = () => {
  localStorage.removeItem("authKey");
};

export { token, Logout };
