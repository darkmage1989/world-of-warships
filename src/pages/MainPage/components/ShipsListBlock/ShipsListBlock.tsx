import { useQuery } from "@apollo/client";
import { SHIPS } from "../../../../apollo/ships";
import ShipListItem from "../ShipListItem/ShipListItem";
import { ShipListBox } from "./styles";
import { vehicles } from "../../../../interface";

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
  const vehicles = data.vehicles;
  return (
    <ShipListBox>
      {vehicles.map((item: vehicles) => (
        <ShipListItem data={item} />
      ))}
    </ShipListBox>
  );
};

export default ShipsListBlock;
