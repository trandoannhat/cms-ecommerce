import React, { useState } from "react";

import AppModal from "../../components/common/AppModal";
import AppFilters, {
  type FilterConfig,
} from "../../components/common/AppFilters";
import { log } from "console";

type Props = {};

const Dashboard = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = () => {
    setIsOpen(!isOpen);
  };

  const testFilters: FilterConfig[] = [
    {
      type: "input",
      name: "search",
      placeholder: "Tìm kiếm...",
      label: "Tìm kiếm",
    },
    {
      type: "select",
      name: "isActive",
      placeholder: "Chọn",
      options: [
        {
          label: "Tất cả",
          value: 0,
        },
        {
          label: "Hoạt động",
          value: 1,
        },
      ],
      label: "Trạng thái",
    },
  ];

  const handleGetValueFilter = (valueFilter) => {
    console.log(valueFilter);
  };

  return (
    <div>
      <button onClick={handleChange}>Mở</button>
      <AppFilters filters={testFilters} onchange={handleGetValueFilter} />
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
