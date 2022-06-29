import React, { useState, useEffect } from "react";

const GroceryCard = (props) => {
  const [itemNotFound, setItemNotFound] = useState([]);
  const [fpItem, setFpItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    Promise.all(
      props.groceries.map((item) => {
        return new Promise((resolve) => {
          fetch(
            `https://website-api.omni.fairprice.com.sg/api/layout/search/v2?includeTagDetails=true&orderType=DELIVERY&q=${item}`
          ).then((response) => {
            return new Promise(() => {
              response.json().then((data) => {
                if (data.code !== 200) {
                  console.log("return code: ", data.code);
                } else if (
                  data.data.page.layouts[2].value.collection.count > 0
                ) {
                  setFpItem((prevState) => [
                    ...prevState,
                    {
                      item: item,
                      data: data.data.page.layouts[2].value.collection
                        .product[0],
                    },
                  ]);
                  setItemNotFound((prevState) => {
                    return prevState.filter(
                      (data, index) => index !== prevState.indexOf(item)
                    );
                  });
                }
                resolve();
              });
            });
          });
        });
      })
    ).then(() => {
      console.log("done");
      setIsLoading(false);
    });
  };
  useEffect(() => {
    setItemNotFound(props.groceries);
    fetchData();
  }, [props.groceries]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <div>
        {fpItem.map((item) => (
          <>
            <img src={item.data.images[0]} style={{ width: "150px" }} />
            <p>Found in fairprice for {item.item}:</p>
            <p>{item.data.name} </p>
          </>
        ))}
      </div>
      <div>
        <p>Item Not Found: </p>
        {itemNotFound.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default GroceryCard;
