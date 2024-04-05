import { vehicles } from "../../../../interface";
import {
  Card,
  Container,
  Content,
  ContentLink,
  ContentParagraph,
  Face1,
  Face2,
  ShipIcon,
} from "./styles";

interface ShipListItemProps {
  data: vehicles;
}

const ShipListItem = ({ data }: ShipListItemProps) => {
  return (
    <Container>
      <Card>
        <Face1 className="face face1">
          <Content>
            <ShipIcon src={data.icons.medium} alt="medium" />
            <h3>Some Title</h3>
          </Content>
        </Face1>
        <Face2 className="face face2">
          <ContentParagraph>
            {" "}
            американский акционный премиумный эсминец II уровня. Пять
            скорострельных малокалиберных орудий позволяют этому кораблю успешно
            бороться с одноклассниками. Достаточно высокая скорость и
            маневренность дают возможность его капитану уклониться от огня
            противника. Торпедное вооружение этого эсминца весьма необычно и
            больше в игре не встречается — у корабля три однотрубных торпедных
            аппарата, два из которых установлены по бортам, а третий может вести
            огонь на оба борта.
          </ContentParagraph>
          <ContentLink href="/">Подробнее</ContentLink>
        </Face2>
      </Card>
    </Container>
  );
};

export default ShipListItem;
