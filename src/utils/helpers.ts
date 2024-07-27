import Cookies from "js-cookie";

export const getLocalJwt = () => {
  /**
   * Retrieves a JWT token from a cookie named 'USER_DETAILS'.
   * @returns {string | undefined} The JWT token from the 'USER_DETAILS' cookie, or undefined if the cookie doesn't exist or doesn't contain a token.
   */
  const cookieData = Cookies.get("USER_DETAILS");
  if (cookieData) {
    const profileData = JSON.parse(Cookies.get("USER_DETAILS") || "") || {};
    return profileData?.token;
  }
};
