import { getImageUrl } from "@/app/lib/api";
import { Category } from "@/app/types";
import Image from "next/image";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

type TCategoryTableProps = {
  categories: Category[];
  onEdit: (category: Category) => void;
  onDelete: (id: string) => void;
};

const CategoryTable = ({ categories, onEdit, onDelete }: TCategoryTableProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-6 py-4 font-semibold">Category</th>
            <th className="px-6 py-4 font-semibold">Description</th>
            <th className="px-6 py-4 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((data) => (
            <tr key={data._id} className="border-b border-gray-200 last:border-b-0">
              <td className="px-6 py-4 font-medium">
                <div className="flex gap-3 items-center">
                  <div className="aspect-square rounded-md">
                    <Image className="aspect-square object-contain" width={52} height={52} src={getImageUrl(data.imageUrl)} alt={data.name} />
                  </div>
                  <span>{data.name}</span>
                </div>
              </td>
              <td className="px-6 py-4 font-medium">
                <div className="rounded-md">{data.description}</div>
              </td>
              <td className="px-6 py-7.5 flex gap-7 text-gray-600">
                <button onClick={() => onEdit?.(data)} className="cursor-pointer">
                  <FiEdit2 size={20} />
                </button>
                <button onClick={() => onDelete?.(data._id)} className="cursor-pointer">
                  <FiTrash2 size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTable;
