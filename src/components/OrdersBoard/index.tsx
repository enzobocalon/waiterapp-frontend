import { useState } from 'react';
import { Order } from '../../types/Order';
import { api } from '../../utils/api';
import { OrderModal } from '../OrderModal';
import { Board, OrdersContainer } from './style';

interface OrdersBoardProps {
  icon: string,
  title: string,
  orders: Order[],
  onCancelOrder: (orderId: string) => void;
}

export function OrdersBoard({icon, title, orders, onCancelOrder}: OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleCancelOrder() {
    if (!selectedOrder) return;
    setIsLoading(true);
    await api.delete(`/orders/${selectedOrder._id}`);
    setIsLoading(false);
    setIsModalVisible(false);
    onCancelOrder(selectedOrder._id);
  }

  function handleOpenModal(order: Order) {
    setIsModalVisible(prev => !prev);
    setSelectedOrder(order);
  }

  function handleCloseModal () {
    setIsModalVisible(prev => !prev);
    setSelectedOrder(null);
  }

  return (
    <Board>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
        onCancelOrder={handleCancelOrder}
        isLoading={isLoading}
      />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 &&
        <OrdersContainer>
          {orders.map(order => (
            <button type='button' key={order._id} onClick={() => handleOpenModal(order)}>
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          ))}
        </OrdersContainer>}
    </Board>
  );
}
