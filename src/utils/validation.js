export function validateUserName(userName) {
  if (userName.trim().length <= 0) {
    return { message: "Invalid User Name" };
  }

  return null;
}
