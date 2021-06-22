import { useCallback, useState } from "react";

export const useFetchContent = () => {
  const [imgList, setImgList] = useState([]);
  const [page , setPage] = useState(1);
  const [pagePart, setPagePart] = useState(2)
  const fetchData = useCallback(async (name) => {
    const apiURL = name? `https://rickandmortyapi.com/api/character/?name=${name}` : 'https://rickandmortyapi.com/api/character/'
    const data = await fetch(apiURL).then(res=>res.json())
    /* TODO: fetch images from this   url: https://rickandmortyapi.com/api/character/
      (to fetch with name add name in search query: https://rickandmortyapi.com/api/character/?name=rick)
    */
   const images = data.results.map(e=> {return e}).slice(0,10)
   setImgList(images)
  }, []);

  const fetchMore = useCallback(async ()=> {
    console.log(page);
    const apiURL =`https://rickandmortyapi.com/api/character/?page=${page}`
    let images
      if (pagePart === 1){
        setPagePart(2)
        const data = await fetch(apiURL).then(res=>res.json())
        images = pagePart === 1?imgList.concat(data.results.map(e=> {return e}).slice(0,10)):imgList.concat(data.results.map(e=> {return e}).slice(10,20))
    } else {
      setPagePart(1)
      setPage(page+1)
        const data = await fetch(apiURL).then(res=>res.json())
        images = pagePart === 1?imgList.concat(data.results.map(e=> {return e}).slice(0,10)):imgList.concat(data.results.map(e=> {return e}).slice(10,20))
  
  } 
    
    setImgList(images)

  },[page,imgList])
  // TODO: Put fetchMore method here

  return [imgList, fetchData, fetchMore];
};
