import { vehicles } from "../../../../../interface.ts";

export function getTotalPage(data: vehicles[], countPerPage: number): number {
  return Math.floor(data.length / countPerPage);
}
