export const DEFAULT_CRIDENTIALS = {
  ADMIN: {
    usedUid: "as31fjeodj324",
    login: "admin",
    password: "admin",
    name: "Ruslan",
  },
  BARTOSZ: {
    usedUid: "yh43o12je32189fj",
    login: "bartosz",
    password: "bartosz",
    name: "Bartosz",
  },
};

export const validateCridentials = ({ login, password }) => {
  for (const [, defaultCridentials] of Object.entries(DEFAULT_CRIDENTIALS)) {
    if (
      defaultCridentials.login === login &&
      defaultCridentials.password === password
    ) {
      return defaultCridentials;
    }
  }
  return null;
};
