import React, { useState } from "react";

import AppModal from "../../components/common/AppModal";

type Props = {};

const Dashboard = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button onClick={handleChange}>Mở</button>

      <AppModal
        open={isOpen}
        onOk={() => {
          setIsOpen(false);
        }}
        bg={"red"}
      >
        Tôi là modal
      </AppModal>
    </div>
  );
};

export default Dashboard;
