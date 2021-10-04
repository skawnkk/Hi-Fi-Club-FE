const isUndefined = (v: any) => typeof v === "undefined";

const isLogin = (): boolean => !!localStorage.getItem("jwt");

const getLocationName = (location: string) => {
  const parseLocation = location.split(" ").reverse();
  return { cityName: parseLocation[1], dongName: parseLocation[0] };
};

export { isUndefined, isLogin, getLocationName };
