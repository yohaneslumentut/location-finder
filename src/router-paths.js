const pathsMap = {
  home: () => '/',
  check: () => '/check',
  about: () => '/about',
};

export const getPath = (route, ...params) => {
  const pathCallback = pathsMap[route];
  return pathCallback(...params);
};
