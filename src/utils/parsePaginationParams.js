// src/utils/parsePaginationParams.js

const parseNumber = (number, defaultValue) => {
  const isString = typeof number === 'string';
  if (!isString) return defaultValue;

  const parsedNumber = parseInt(number);
  if (Number.isNaN(parsedNumber)) {
    return defaultValue;
  }

  return parsedNumber;
};

export const parsePaginationParams = (query) => {
  const { page, perPage } = query;

  const parsedPage = Math.max(parseNumber(page, 1), 1);
  const parsedPerPage = Math.max(parseNumber(perPage, 10), 1);
  const safePerPage = Math.min(parsedPerPage, 8);

  return {
    page: parsedPage,
    perPage: safePerPage,
  };
};
