import React from "react";

type Props = {
  setPage: (page: number) => void;
  page: number;
  paginate: number;
  tag?: string;
};

const PaginateButton = ({ setPage, page, paginate, tag }: Props) => {
  return (
    <button
      className={`p-2 font-tertiary border border-gray-400 w-12 h-12 rounded-md hover:bg-gray-300 active:bg-gray-700  ${
        page === paginate ? "bg-slate-500" : "bg-slate-200"
      }`}
      //disabled onclick when tag is present
      onClick={() => setPage(paginate)}
    >
      {tag ? tag : paginate}
    </button>
  );
};

export default PaginateButton;
