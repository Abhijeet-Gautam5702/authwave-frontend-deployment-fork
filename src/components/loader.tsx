import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setLoading, stopLoading } from "@/store/loader/loader.slice";

export const Loader = () => {
  const { isLoading, loadingMessage } = useSelector(
    (state: RootState) => state.loader
  );

  if (!isLoading) return null;

  return (
    <div className="w-full h-screen flex-center text-white">
      <div className="flex-center flex-col">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-p-accent border-t-transparent rounded-full animate-spin mb-8"></div>

        <h1 className="text-2xl font-bold mb-4">AuthWave</h1>

        <p className="text-gray-400">{loadingMessage}</p>
      </div>
    </div>
  );
};

// Custom hook to manage loader state
const useLoader = () => {
  const dispatch = useDispatch();

  return {
    startLoading: (message?: string) =>
      dispatch(setLoading({ isLoading: true, loadingMessage: message })),
    stopLoading: () => dispatch(stopLoading()),
  };
};

export default useLoader;
