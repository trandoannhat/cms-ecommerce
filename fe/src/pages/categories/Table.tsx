import React from "react";
import type { CategoriesResponse } from "./Types";
import { Table, Tag } from "antd";

type Props = {
  categories: CategoriesResponse[];
  total: number;
  page: number;
  pageSize: number;
  loading: boolean;
  onPageChange: (page: number, pageSize: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
};

const TableCategories = ({
  categories,
  page,
  pageSize,
  loading,
  total,
  onDelete,
  onEdit,
  onPageChange,
}: Props) => {
  const columns = [
    {
      title: "Tên danh mục",
      dataIndex: "name",
      key: "name",
      render: (text: string) => <b>{text}</b>,
    },
    {
      title: "Slug",
      dataIndex: "slug",
      key: "slug",
    },
    {
      title: "Trạng thái",
      dataIndex: "isActive",
      key: "isActive",
      render: (active: boolean) =>
        active ? <Tag color="green">Hoạt động</Tag> : <Tag color="red">Ẩn</Tag>,
    },
    {
      title: "Hành động",
      dataIndex: "actions",
      key: "actions",
      render: (text: string) => <b>Hành động</b>,
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={[]}
      loading={loading}
      rowKey={"id"}
      pagination={{
        current: page,
        pageSize,
        total,
        showSizeChanger: true,
        onChange: onPageChange,
      }}
    />
  );
};

export default TableCategories;
