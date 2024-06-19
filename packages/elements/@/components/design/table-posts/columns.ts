import { type ColumnDef } from "@tanstack/vue-table";
import { defineComponent, h } from "vue";
import type { Post } from "./types";
import { Button } from "@/components/ui/button";
import { PencilIcon, TrashIcon } from "lucide-vue-next";
import { TablePostsActions } from "./mod";

// FIXME: there's a  problem of compatibility between ColumnDef and and the typ eof the array in which helpers are used,
// Ref.: https://github.com/TanStack/table/issues/4382

// const columnHelper = createColumnHelper<Post>();
// const accessor = columnHelper.accessor;
// const display = columnHelper.display;

// export const columns: ColumnDef<Post> = [
//   accessor("id", {
//     header: "ID",
//     cell: ({ cell }) => {
//       const id = cell.getValue();
//       return h("div", { class: "text-center font-bold" }, id);
//     },
//   }),
//   accessor("title", {
//     id: "title",
//     header: "title",
//     cell: ({ cell }) => {
//       const title = cell.getValue<number>();
//       return h("div", { class: "text-left" }, title);
//     },
//   }),
//   accessor("createdAt", {
//     id: "createdAt",
//     header: "created at",
//     cell: ({ cell }) => {
//       const createdAt = cell.getValue<number>();
//       return h("div", { class: "text-left" }, createdAt);
//     },
//   }),
//   accessor("updatedAt", {
//     id: "updatedAt",
//     header: "updated at",
//     cell: ({ cell }) => {
//       const updatedAt = cell.getValue<number>();
//       return h("div", { class: "text-left" }, updatedAt);
//     },
//   }),
//   display({
//     id: "actions",
//     cell: ({ row }) => {
//       return h("div", {}, [
//         h(Button, { variant: "Secondary" }, "Edit"),
//         h(Button, { variant: "destructive" }, "Remove"),
//       ]);
//     },
//   }),
// ];

export const columns: ColumnDef<Post>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      const id = row.original.id;
      return h("div", { class: "text-center font-bold" }, id);
    },
  },
  {
    accessorKey: "title",
    header: "title",
    cell: ({ row }) => {
      const title = row.original.title;
      return h("div", { class: "text-left" }, title);
    },
  },
  {
    accessorKey: "createdAt",
    header: "created at",
    cell: ({ row }) => {
      const createdAt = row.original.createdAt;
      return h("div", { class: "text-left" }, createdAt);
    },
  },
  {
    accessorKey: "updatedAt",
    header: "updated at",
    cell: ({ row }) => {
      const updatedAt = row.original.updatedAt;
      return h("div", { class: "text-left" }, updatedAt);
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const id = row.original.id;
      return h(TablePostsActions, {
        id,
        onEdit: (id: string) => console.log("edit", id),
        onDelete: (id: string) => console.log("delete", id),
      });
    },
  },
];
