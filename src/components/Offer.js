import { useEffect, useState } from "react";
import { Thumbnails } from "./Thumbnail";

export const Offer = (props) => {
  const [isFetching, setIsFetching] = useState(true);
  const [offer, setOffer] = useState(null);
  const [mainImageSrc, setMainImageSrc] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleThumbnailClick = (src) => {
    setMainImageSrc(src);
  };

  useEffect(() => {
    setIsFetching(true);
    fetch(`https://dummyjson.com/products/${props.id}`)
      .then((response) => {
        if (!response.ok) {
          return Promise.reject();
        }
        return response.json();
      })
      .then((data) => {
        setOffer(data);
        if (data.images?.length > 0) {
          setMainImageSrc(data.images[0]);
        }
      })
      .catch(() => {
        // don't show component
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [props.id]);

  if (isFetching) {
    return <div>loading...</div>;
  }

  if (!isFetching && !offer) {
    return null;
  }

  return (
    <div>
      <h3>
        {offer.title} (id: {props.id})
      </h3>
      <p>{offer.description}</p>
      {mainImageSrc ? <img src={mainImageSrc} alt="image" width="400" height="400" /> : <p>no images</p>}
      <Thumbnails images={offer.images} onThumnbailClick={handleThumbnailClick} />
    </div>
  );
};
