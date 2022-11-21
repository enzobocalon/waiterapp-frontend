import { OrdersBoard } from '../OrdersBoard';
import { Container } from './style';
import { orders } from '../../mocks/orders';

export function Orders() {
  return (
    <Container>
      <OrdersBoard icon='🕓' title='Fila de espera' orders={orders}/>
      <OrdersBoard icon='👩‍🍳' title='Em Preparação' orders={[]}/>
      <OrdersBoard icon='✅' title='Pronto!' orders={[]}/>
    </Container>
  );
}
