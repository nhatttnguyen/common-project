export const getHashStringParameter = (paramToRetrieve, currentLocation) => {
  const windowLocation = currentLocation || window.location;
  const hash = windowLocation.hash.replace('#', '');
  const params = hash.split('&');
  for (let i = 0; i < params.length; i += 1) {
    const singleParam = params[i].split('=');
    if (singleParam[0] === paramToRetrieve) {
      return singleParam[1];
    }
  }
  return '';
};
