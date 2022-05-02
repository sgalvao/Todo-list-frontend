import { format } from "date-fns";

export const useDate = (date: string) => {
  const formatedDate = format(parseInt(date), "MMMM dd, yyyy");
  return formatedDate;
};
