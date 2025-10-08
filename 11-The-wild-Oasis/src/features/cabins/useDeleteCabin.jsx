import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success("Cabin deleted successfully");

      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
      // this err comes for the deleteCabin function when it throws an error
    },
  });
  return { isDeleting, deleteCabin };
}

//here mutate is the callback fn, that we can connect with the button, so that it call the mutation Function
//So, when we delete the cabin, it doesnot reload the page/ it doesnot load the new data as it is in still stale, When we refresh the page, it disappears.

//To fetch the new data/ updated data, if we make the query as invalidate, then it will refetch/ reload the data. So, onSuccess of the mutation query, we have to make the query as invalidate, so that we can reload the new data And we have to give that at the QueryClient level that is present in App.jsx file, so we can access that QueryClient using useQueryClient hook. And we have to give the queryKey that has to be refetched inside the invalidateQueries.
