import { useQuery } from "@tanstack/react-query";


const useJobs = () => {

    const { data, isLoading, isFetching } = useQuery({
        queryKey: ["jobs"],
        queryFn: async () => {
          const data = await fetch("https://job-hunter-server-nine.vercel.app/api/v1/all/jobs");
          return await data.json();
        },
      });

    return { data, isLoading, isFetching };
};

export default useJobs;