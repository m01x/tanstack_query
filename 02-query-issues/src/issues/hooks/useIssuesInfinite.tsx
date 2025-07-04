import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { getIssues } from "../actions"
import { State } from "../interfaces";

interface Props {
    state: State;
    selectedLabels: string[];
}


export const useIssuesInfinite = ({ state, selectedLabels }: Props) => {

  
    const issuesQuery = useInfiniteQuery({
        queryKey: ['issues', 'issuesInfinite', {state, selectedLabels}],
        queryFn:({ pageParam, queryKey })=> {

          const [,,args] = queryKey;

          //Podriamos directamente obtener esto, desde los argumentos de la funcion...
          const { state, selectedLabels } = args as Props;
          console.log(queryKey);



          return getIssues(state, selectedLabels, pageParam);
        },
        staleTime: 1000 * 60,
        initialPageParam: 0,
        getNextPageParam: (lastPage, pages) => lastPage.length > 0 ? pages.length +1 : undefined
    });

  
    return {
        issuesQuery,

    }
}
