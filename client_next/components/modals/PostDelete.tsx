"use client";

type PostDeleteProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  content: string;
};

export default function PostDelete({ open, onClose, onConfirm, content }: PostDeleteProps) {

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/40 transition-opacity duration-200 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      <div className={`w-[90%] max-w-md rounded-xl bg-white dark:bg-black p-5 shadow-lg transform transition-all duration-200 ${open ? "scale-100 translate-y-0 opacity-100" : "scale-95 translate-y-2 opacity-0"}`}>
        <h2 className="text-[1.2rem] font-semibold text-blue-600 mb-2">
          Delete post?
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          This action cannot be undone. Are you sure you want to delete this post?
        </p>
        <div className="border rounded-md p-3 text-sm bg-gray-50 dark:bg-white/5 my-5">
          {content}
        </div>
        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="w-30 py-1.5 rounded-md border cursor-pointer hover:bg-black/5 dark:hover:bg-white/10">
            Cancel
          </button>
          <button onClick={onConfirm} className="w-30 py-1.5 rounded-md bg-blue-500 text-white hover:bg-blue-600">
            Yes, delete
          </button>
        </div>
      </div>
    </div>
  );
}
