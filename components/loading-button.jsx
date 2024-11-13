import { Button } from "@/components/ui/button";

export default function LoadingButton({ pending, children }) {
  return (
    <Button className="w-full" type="submit" disabled={pending}>
      {pending ? (
        <div className="flex items-center justify-center">
          <i className="hgi-stroke hgi-loading-03 animate-spin h-5 w-5 text-white mr-2"></i>
        </div>
      ) : (
        children
      )}
    </Button>
  );
}
