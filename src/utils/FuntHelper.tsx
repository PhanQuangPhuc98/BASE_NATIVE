export const formatNumber = (data: any) => {
  return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};
export default {
  formatNumber,
};
