import React, { useEffect, useState } from "react";
import { ApiKey, baseUrl } from "../Apis/MovieApiKey";
import Cards from "../Component/Cards";

const Homepage = () => {
  const [listData, setlistData] = useState({
    title: "",
  });
  const MovieList = async () => {
    // API for get requests
    await fetch(`${baseUrl}?apikey=${ApiKey}&s=Batman&page=2`)
      .then((res) => res.json())
      .then((d) => {
        const arrayList = [];
        arrayList.push(d);
        for (var i in arrayList) {
          // console.log(arrayList[i].Search);
          for (var j in arrayList[i].Search) {
            setlistData({
              ...listData,
              title: Object.values(arrayList[i].Search[j])[0],
            });
          }
        }

        // arrayList.push(d.Search[1].Title);
        // setlistData({ ...listData, title: arrayList });
      });
  };
  // useEffect(() => {
  //   console.log(listData.title);
  // }, [listData.title]);
  useEffect(() => {
    const unsuscribe = () => {
      MovieList();
    };
    return unsuscribe();
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            {" "}
            <Cards title={listData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
