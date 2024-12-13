export const USER_VALIDATION = {
  AGE: {
    MIN: 0,
    MAX: 120
  },
  NAME: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 50
  },
  EMAIL: {
    MAX_LENGTH: 255
  }
} as const;