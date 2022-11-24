import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0,0,0,.8);
  backdrop-filter: blur(4.5px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background-color: white;
  width: 100%;
  max-width: 480px;
  border-radius: 8px;
  padding: 32px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
    }

    button {
      border: none;
      background-color: transparent;
      line-height: 0;
    }
  }

  .status-container {
    margin-top: 32px;

    small {
      font-size: 14px;
      opacity: .8;
    }

    div {
      display: flex;
      gap: 8px;
      align-items: center;
      margin-top: 8px;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong {
    font-weight: 500;
    font-size: 14px;
    opacity: .8;
  }

  .order-items{
    margin-top: 16px;

    .item {
      display: flex;

      & + .item {
        margin-top: 16px;
      }

      > img {
        border-radius: 6px;
      }

      .quantity {
        font-size: 14px;
        color: #666;
        display: block;
        min-width: 20px;
        margin-left: 20px;
      }

      .product-details {
        margin-left: 4px;
        strong {
          display: block;
          margin-bottom: 4px;
        }

        span {
          font-size: 14px;
          color: #666;
        }
      }

    }
  }
  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;

    span {
      font-size: 14px;
      font-weight: 500;
      opacity: .8;
    }
  }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  
  .primary {
    background-color: #333;
    border-radius: 48px;
    border: 0;
    color: white;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
  }

  .secondary {
    padding: 12px 24px;
    color: #d73035;
    font-weight: bold;
    background-color: transparent;
    border: 0;
    margin-top: 12px;
  }
`;
