import React, { useContext, useEffect, useRef } from "react";
import { PhotoContext } from "../context/PhotoContext";
import Gallery from "./Gallery";
import Loader from "./Loader";

const Container = ({ searchTerm }) => {
  const { images, loading, runSearch } = useContext(PhotoContext);

  // when navigating to 'bird', a second component appears, logging a different ref value
  // the original component renders thw same ref value repeatedly
  // this tells me that when navigating (via the router), the component is reused, not taken off dom and re-created.
  const ref = useRef(Math.random()*10)

  useEffect(() => {
    runSearch(searchTerm);

    // eslint-disable-next-line
  }, [searchTerm])//[]);
console.log('render!: ', ref)
  return (
    <div className="photo-container">
      {loading ? <Loader /> : <Gallery data={images} />}
    </div>
  );
};

export default Container;
