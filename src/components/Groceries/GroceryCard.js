import React, { useState, useEffect } from "react";
import { Card } from "@mui/material";

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

  return (
    <>
      <h1 id="groceries">Groceries for the week</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {fpItem.map((item) => (
            <>
              <p>Found in fairprice for {item.item}:</p>
              <Card>
                <img src={item.data.images[0]} style={{ width: "80px" }} />
                <p>{item.data.name} </p>
                <a
                  href={`https://www.fairprice.com.sg/search?query=${item.item}`}
                  target="_blank"
                >
                  Find out more
                </a>
              </Card>
            </>
          ))}

          <div>
            <p>Item Not Found: </p>
            {itemNotFound.map((item) => (
              <p>{item}</p>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default GroceryCard;
