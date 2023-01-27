export const createRequestUrl = (
  baseUrl: string,
  method: string,
  perPage: number,
  page: number,
  searchText?: string,
  tag?: string
) => {
  let url = baseUrl;

  if (method) {
    url += `&method=${method}`;
  }
  if (perPage) {
    url += `&per_page=${perPage}`;
  }
  if (page) {
    url += `&page=${page}`;
  }
  if (searchText) {
    url += `&text=${searchText}`;
  }
  if (tag) {
    url += `&tags=${tag}`;
  }

  return url;
};
