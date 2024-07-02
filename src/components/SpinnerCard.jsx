export default function SpinnerCard() {
  return (
    <div className="rounded-3xl max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4 items-center">
        <div className="rounded-full bg-[#b3a78d] h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-[#b3a78d] rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-[#b3a78d] rounded col-span-2"></div>
              <div className="h-2 bg-[#b3a78d] rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-[#b3a78d] rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
