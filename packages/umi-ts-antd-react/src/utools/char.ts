export const isMobile = () => {
  return window.innerWidth < 768;
}

export const isChinesePhoneNumber = (phoneNumber: string ) => {
  return /^1[3-9]\d{9}$/.test(phoneNumber);
}

