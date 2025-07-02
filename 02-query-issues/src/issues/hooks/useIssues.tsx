import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query"
import { getIssues } from "../actions"
import { State } from "../interfaces";

interface Props {
    state: State;
    selectedLabels: string[];
}


export const useIssues = ({ state, selectedLabels }: Props) => {

    const [page, setPage] = useState(1);
  
    const issuesQuery = useQuery({
        queryKey: ['issues', {state, selectedLabels, page}],
        queryFn:()=> getIssues( state, selectedLabels, page ),
        staleTime: 1000 * 60
    });

    //Volver a la pag 1 cuando selecciono All, Open, Closed
    useEffect( () => {
      setPage(1);
    },[state]);

    //Volver a la pag 1, cuando selecciono un label
    useEffect( () => {
      setPage(1);
    },[selectedLabels]);

    //Paginación

    const nextPage = () => {
      if ( issuesQuery.data?.length === 0 ){
        return;
      }

      setPage( page + 1)
    }

    const prevPage = () => {
      if ( page === 1){
        return;
      }

      setPage( (prevPage) => prevPage - 1);
    }
  
    return {
        issuesQuery,

        //Getters
        page,

        //actions
        nextPage,
        prevPage
    }
}
