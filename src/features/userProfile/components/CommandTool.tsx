const CommandTool = ({ onCancel }: { onCancel: () => void }) => {
  return (
    <div className="mt-4 flex justify-end">
      <button
        type="button"
        onClick={onCancel}
        className="inline-flex items-center px-4 py-2 bg-white text-sm font-medium rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 mr-3"
      >
        Cancel
      </button>

      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700"
      >
        Save
      </button>
    </div>
  );
};
export default CommandTool;
