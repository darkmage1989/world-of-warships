// @flow

import { vehicles } from "../../../../interface.ts";
import { useState } from "react";
import { getTotalPage } from "./utils/paginationUtils.ts";
import { Button } from "./styles.ts";
type Props = {
  data: vehicles[];
  countPerPage: number;
  currentPageInput?: number;
};
export function Pagination({
  data,
  countPerPage,
  currentPageInput = 1,
}: Props) {
  if (data.length === 0) {
    return;
  }
  const totalPage = getTotalPage(data, countPerPage);
  const totalPagesArray = [...Array(totalPage).keys()].map((i) => i + 1);
  const [currentPage, setCurrentPage] = useState(currentPageInput);
  function navigatePage(direction: number) {
    if (direction < 1 || direction > totalPage) {
      return;
    }
    setCurrentPage(direction);
  }
  function getData() {
    const currentPageData = data[currentPage * countPerPage];
    const outputData = [];
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < countPerPage; j++) {
        outputData[i][j].push(data[i][j]);
      }
    }
  }
  getData();
  return (
    <div>
      <Button onClick={() => navigatePage(currentPage - 1)}>{"<"}</Button>
      {totalPagesArray.map((item) => (
        <Button
          $isActive={currentPage === item}
          key={item}
          onClick={() => navigatePage(item)}
        >
          {item}
        </Button>
      ))}
      <Button onClick={() => navigatePage(currentPage + 1)}>{">"}</Button>
    </div>
  );
}
