import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  Card,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
                  console.error("return code: ", data.code);
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
      setIsLoading(false);
    });
  };
  useEffect(() => {
    setItemNotFound(props.groceries);
    fetchData();
  }, [props.groceries]);

  return (
    <div>
      <h1 id="groceries" className="text-2xl">
        Groceries for the week
      </h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {fpItem.map((item) => (
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="flex-start"
            >
              <Grid item xs={1}>
                <Checkbox></Checkbox>
              </Grid>
              <Grid item xs={11}>
                <Accordion className="bg-transparent shadow-none mb-0 w-full">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <p>{item.item}</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <a
                      href={`https://www.fairprice.com.sg/product/${item.data.slug}`}
                      target="_blank"
                    >
                      <Card className="py-2 px-4 drop-shadow-xl rounded-lg">
                        <p>Found {item.item} in Fairprice:</p>
                        <div className="flex flex-row">
                          <img
                            src={item.data.images[0]}
                            style={{ width: "100px" }}
                            className="rounded-md"
                            loading="lazy"
                          />
                          <div className="flex flex-column">
                            <p className="p-2">{item.data.name}</p>
                            <a
                              className="p-2 text-blue-800"
                              href={`https://www.fairprice.com.sg/search?query=${item.item}`}
                              target="_blank"
                            >
                              Find more
                            </a>
                          </div>
                        </div>
                      </Card>
                    </a>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
          ))}
          {itemNotFound.map((item) => (
            <div className="flex flex-row">
              <Checkbox></Checkbox>
              <Accordion className="bg-transparent shadow-none mb-0 w-[450px]">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <p>{item}</p>
                </AccordionSummary>
                <AccordionDetails>
                  <Card className="py-2 px-4 drop-shadow-xl rounded-lg">
                    <p>Item is not found in Fairprice</p>
                    <p>
                      Try searching in{" "}
                      <a
                        href={`https://coldstorage.com.sg/search?q=${item}`}
                        target="_blank"
                        className="text-blue-800"
                      >
                        Cold Storage
                      </a>
                      ,{" "}
                      <a
                        href={`https://giant.sg/search?q=${item}`}
                        target="_blank"
                        className="text-blue-800"
                      >
                        Giant
                      </a>
                      , or{" "}
                      <a
                        href={`https://shengsiong.com.sg/search/${item}`}
                        target="_blank"
                        className="text-blue-800"
                      >
                        Sheng Siong
                      </a>{" "}
                      instead
                    </p>
                  </Card>
                </AccordionDetails>
              </Accordion>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default GroceryCard;
