import { Modal, type ModalProps } from "antd";
import React from "react";

type AppModalProps = ModalProps & {
  bg: string;
};

const AppModal: React.FC<AppModalProps> = ({ children, ...rest }) => {
  return (
    <Modal
      centered // giữa màn hình
      destroyOnHidden // hủy khỏi dom khi đóng
      maskClosable={false} // không tự ẩn đi, đỡ mất dữ liệu đang nhập
      {...rest} // cho phép truyền thêm props nếu cần
    >
      children
    </Modal>
  );
};

export default AppModal;
