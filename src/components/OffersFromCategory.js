import { useEffect } from "react";
import { useState } from "react";

export const OffersFromCategory = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/smartphones")
      .then((response) => {
        if (!response.ok) {
          return Promise.reject();
        }
        return response.json();
      })
      .then((data) => {
        setOffers(data.products);
      })
      .catch(() => {
        // do nothing
      });
  }, []);

  if (offers.length === 0) {
    return <div>no offers in this category</div>;
  }

  return (
    <div>
      Category: Smartphones
      <ul>
        {offers.map((offer) => (
          <li key={offer.id}>{offer.title}</li>
        ))}
      </ul>
    </div>
  );
};
