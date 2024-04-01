import { useQuery } from "@apollo/client";
import { SHIPS } from "../../../../apollo/ships";
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
  console.log(vehicles);
  return (
    <section>
    
    </section>
  );
};

export default ShipsListBlock;
