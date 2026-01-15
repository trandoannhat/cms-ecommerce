import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import AppFilters, {
  type FilterConfig,
} from "../../components/common/AppFilters";
import { Button } from "antd";
import TableCategories from "./Table";

type Props = {};

const categoriesFilter: FilterConfig[] = [
  {
    type: "input",
    name: "search",
    placeholder: "Tìm kiếm danh mục...",
    label: "Tìm kiếm",
  },
  {
    type: "select",
    name: "isActive",
    placeholder: "Trạng thái",
    options: [
      {
        label: "Tất cả",
        value: 0,
      },
      {
        label: "Hoạt động",
        value: 1,
      },
      {
        label: "Không hoạt động",
        value: 2,
      },
    ],
    label: "Trạng thái",
  },
];

const CategoriesPage = (props: Props) => {
  const { isDark } = useContext(ThemeContext);

  const handleGetValueFilter = (valueFilter) => {
    //console.log(valueFilter);
  };

  return (
    <div
      style={{
        padding: 24,
        borderRadius: 8,
        background: isDark ? "#262626" : "#fff",
        boxShadow: isDark
          ? "0 2px 8px rgba(0,0,0,0.6)"
          : "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <div className="flex items-center justify-between mb-8">
        <AppFilters
          filters={categoriesFilter}
          onchange={handleGetValueFilter}
        />
        <Button type="primary">+ Tạo danh mục mới</Button>
      </div>
      <TableCategories
        loading={false}
        page={1}
        pageSize={10}
        total={0}
        categories={[]}
        onPageChange={() => {}}
        onDelete={() => {}}
        onEdit={() => {}}
      />
    </div>
  );
};

export default CategoriesPage;
