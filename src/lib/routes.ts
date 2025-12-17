export const routes = {
  home: () => "/",
  cats: () => "/cats",
  user: (userId: string | number) => `/user/${userId}`,
};

export default routes;
