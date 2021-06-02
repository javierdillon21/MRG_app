import Prismic from "@prismicio/client";

export const apiEndpoint = "https://mrgapp.cdn.prismic.io/api/v2";
export const accessToken =
  "MC5ZTGU5V3hNQUFHVUxQTlQz.e--_vRVF77-977-977-977-977-9Rl9377-9Me-_vT7vv70T77-9FH8d77-977-9Yhos77-9W--_ve-_ve-_vQ";

// Client method to query documents from the Prismic repo
const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken));

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};
  return {
    ...reqOption,
    ...accessTokenOption,
  };
};

export default Client;
