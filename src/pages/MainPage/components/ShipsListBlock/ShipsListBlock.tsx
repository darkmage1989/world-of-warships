import { useQuery } from "@apollo/client";
import { SHIPS } from "../../../../apollo/ships";
import ShipListItem from "../ShipListItem/ShipListItem";
import { ShipListBox } from "./styles";
import { vehicles } from "../../../../interface";
import { Pagination } from "../Pagination/Pagination.tsx";

const ShipsListBlock = () => {
  const { data, loading, error } = useQuery(SHIPS);
  const isEmptyList = !loading && !data;
  if (loading) {
    return <main>загрузочка</main>;
  }
  if (isEmptyList) {
    return <main>нет корабликов</main>;
  }
  if (error) {
    return <main>ошибочка</main>;
  }
  const vehicles: vehicles[] = data.vehicles;
  return (
    <ShipListBox>
      <Pagination data={vehicles} countPerPage={10} />
      {vehicles.map((item, index) => (
        <ShipListItem key={index} data={item} />
      ))}
    </ShipListBox>
  );
};

export default ShipsListBlock;
