import { Loader } from "lucide-react";

const LoadingPage = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center flex-col gap-4">
      <Loader />
      <p>Sedang memuat...</p>
    </div>
  );
};

export default LoadingPage;
