import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../actions";
import { GithubLabel } from "../interfaces";


export const useLabels = () => {

  const labelsQuery = useQuery({
    queryKey: ['labels'],
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60, //1hr de staleTime (query fresh)
    // placeholderData: [ //Siempre será la informacion que se mostrara temporalmente
    //   {
    //     "id": 791921801, 
    //     "node_id": "MDU6TGFiZWw3OTE5MjE4MDE=", 
    //     "url": "https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F", 
    //     "name": "❤️", 
    //     "color": "ffffff", 
    //     "default": false
    //   }satisfies GithubLabel,
      
    //   {"id":8625343998,
    //     "node_id":"LA_kwDOAJy2Ks8AAAACAhxN_g",
    //     "url":"https://api.github.com/repos/facebook/react/labels/Compiler:%20New%20Validation%20Ideas",
    //     "name":"Compiler: New Validation Ideas",
    //     "color":"f9d0c4",
    //     "default":false,
    //     "description":""
    //   } satisfies GithubLabel
    // ]
    //INITIAL DATA!!!
    // initialData:[ //Esto trabaja con el Staletime, esta data se considerará como fresca.
    //   {
    //     "id": 791921801, 
    //     "node_id": "MDU6TGFiZWw3OTE5MjE4MDE=", 
    //     "url": "https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F", 
    //     "name": "❤️", 
    //     "color": "ffffff", 
    //     "default": false
    //   }satisfies GithubLabel,
      
    //   {"id":8625343998,
    //     "node_id":"LA_kwDOAJy2Ks8AAAACAhxN_g",
    //     "url":"https://api.github.com/repos/facebook/react/labels/Compiler:%20New%20Validation%20Ideas",
    //     "name":"Compiler: New Validation Ideas",
    //     "color":"f9d0c4",
    //     "default":false,
    //     "description":""
    //   } satisfies GithubLabel
    // ]
    
  });

  return { labelsQuery };

}
