
export default function ErrorMessage({ error }) {
  return (
    <div
      className="flex w-full items-center p-4 mb-4 gap-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
      role="alert"
    >
      <i className="hgi-stroke hgi-alert-02 h-4 w-4 text-red-500" />
      <span className="sr-only">Error</span>
      <div>{error}</div>
    </div>
  );
}
