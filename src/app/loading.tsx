export default function Loading() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-2xl">
      <span className="absolute mx-auto py-4 flex border w-fit bg-white blur-xl bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none">
        Loading...
      </span>
      <h1 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-white items-center bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
        Loading...
      </h1>
    </div>
  );
}
