import { Actions, ModalBody, OrderDetails, Overlay } from './style';
import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';
import { useEffect } from 'react';

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
  onClose: () => void;
  onCancelOrder: () => void;
  isLoading: boolean;
  onChangeOrderStatus: () => void
}

export function OrderModal({visible, order, onClose, onCancelOrder, isLoading, onChangeOrderStatus}: OrderModalProps) {
  if (!visible || !order) {
    return null;
  }

  const total = order.products.reduce((total, {product, quantity}) => {
    return total + (product.price * quantity);
  }, 0);

  return (
    <Overlay onClick={onClose}>
      <ModalBody onClick={(e) => e.stopPropagation()}>
        <header>
          <strong>Mesa 2</strong>
          <button type='button'>
            <img src={closeIcon} alt='Fechar' onClick={onClose}/>
          </button>
        </header>

        <div className="status-container">
          <small>Status do Pedido</small>
          <div>
            <span>
              {order.status === 'WAITING' && '🕓'}
              {order.status === 'IN_PRODUCTION' && '👩‍🍳'}
              {order.status === 'DONE' && '✅'}</span>
            <strong>
              {order.status === 'WAITING' && 'Fila de Espera'}
              {order.status === 'IN_PRODUCTION' && 'Em Preparação'}
              {order.status === 'DONE' && 'Pronto!'}</strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>

          <div className="order-items">
            {
              order.products.map(({_id, product, quantity}) => (
                <div className="item" key={_id}>
                  <img src={`http://localhost:3001/uploads/${product.imagePath}`} alt={product.name} width='56' height='28.51'/>
                  <span className="quantity">{quantity}x</span>
                  <div className="product-details">
                    <strong>{product.name}</strong>
                    <span>{formatCurrency(product.price)}</span>
                  </div>
                </div>
              ))
            }
          </div>

          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>

          <Actions>
            {
              order.status !== 'DONE' && (
                <button type='button' className='primary' disabled={isLoading} onClick={onChangeOrderStatus}>
                  <span>
                    {order.status === 'WAITING' && '👩‍🍳'}
                    {order.status === 'IN_PRODUCTION' && '✔'}
                  </span>
                  <strong>
                    {order.status === 'WAITING' && 'Iniciar Produção'}
                    {order.status === 'IN_PRODUCTION' && 'Concluir Pedido'}
                  </strong>
                </button>
              )
            }

            <button type='button' className='secondary' onClick={onCancelOrder} disabled={isLoading}>
              Cancelar pedido
            </button>
          </Actions>
        </OrderDetails>
      </ModalBody>
    </Overlay>
  );
}
