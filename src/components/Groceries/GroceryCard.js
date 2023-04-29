import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  Box,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const GroceryCard = (props) => {
  const { groceries } = props;
  const [itemNotFound, setItemNotFound] = useState([]);
  const [fpItem, setFpItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function checkEmptyLocalStorage() {
    return (
      !localStorage.getItem("otherGroceries") ||
      !localStorage.getItem("fpGroceries") ||
      JSON.parse(!localStorage.getItem("fpGroceries")).length <= 0
    );
  }

  const fetchData = async () => {
    console.log("fetching groceries data!");
    setIsLoading(true);
    let tempFpGroceries = [];
    let tempItemNotFound = [];
    Promise.all(
      groceries.map((item) => {
        return new Promise((resolve) => {
          fetch(
            `https://website-api.omni.fairprice.com.sg/api/layout/search/v2?includeTagDetails=true&orderType=DELIVERY&q=${item}`
          ).then((response) => {
            return new Promise(() => {
              response.json().then((data) => {
                if (data.code !== 200) {
                  console.error("return code: ", data.code);
                } else if (Object.keys(data.data).includes("page")) {
                  if (data.data.page.layouts[2].value.collection.count > 0) {
                    tempFpGroceries.push({
                      item: item,
                      data: data.data.page.layouts[2].value.collection
                        .product[0],
                    });
                    setFpItem((prevState) => [
                      ...prevState,
                      {
                        item: item,
                        data: data.data.page.layouts[2].value.collection
                          .product[0],
                      },
                    ]);
                    setItemNotFound((prevState) => {
                      const filterItem = prevState.filter(
                        (data, index) => index !== prevState.indexOf(item)
                      );
                      tempItemNotFound = [...filterItem];
                      return filterItem;
                    });
                  }
                }
                resolve();
              });
            });
          });
        });
      })
    ).then(() => {
      setIsLoading(false);
      localStorage.setItem("fpGroceries", JSON.stringify(tempFpGroceries));
      localStorage.setItem("otherGroceries", JSON.stringify(tempItemNotFound));
    });
  };

  useEffect(() => {
    setItemNotFound(groceries);
    // if localStorage is empty, fetch data. otherwise, use data from localStorage
    if (checkEmptyLocalStorage()) {
      fetchData();
    } else {
      setFpItem(JSON.parse(localStorage.getItem("fpGroceries")));
      setItemNotFound(JSON.parse(localStorage.getItem("otherGroceries")));
      setIsLoading(false);
    }
  }, [groceries]);

  return (
    <div>
      <h1 id="groceries" className="text-2xl">
        Groceries for the week
      </h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {fpItem.map((item, idx) => (
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="flex-start"
              key={`fp-item-${idx}`}
            >
              <Grid item xs={1}>
                <Checkbox />
              </Grid>
              <Grid item xs={11}>
                <Accordion className="bg-transparent shadow-none mb-0 w-[99%]">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <p>{item.item}</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box
                      sx={{
                        py: 2,
                        px: 2,
                        boxShadow:
                          "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                        borderRadius: "0.5rem",
                        backgroundColor: "white",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        window.open(
                          `https://www.fairprice.com.sg/product/${item.data.slug}`,
                          "_blank"
                        );
                      }}
                    >
                      <p className="text-sm p-2">
                        Found {item.item} in Fairprice:
                      </p>
                      <div className="flex flex-row">
                        <img
                          src={item.data.images[0]}
                          style={{ width: "100px", objectFit: "contain" }}
                          className="rounded-md"
                          loading="lazy"
                        />
                        <div className="flex flex-column">
                          <p className="p-2 text-sm">{item.data.name}</p>
                          <a
                            className="p-2 text-blue-800 text-sm"
                            href={`https://www.fairprice.com.sg/search?query=${item.item}`}
                            target="_blank"
                          >
                            Find more
                          </a>
                        </div>
                      </div>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
          ))}
          {itemNotFound.map((item, idx) => (
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="flex-start"
              key={`not-found-${idx}`}
            >
              <Grid item xs={1}>
                <Checkbox />
              </Grid>
              <Grid item xs={11}>
                <Accordion className="bg-transparent shadow-none mb-0 w-[99%]">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <p>{item}</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box
                      sx={{
                        py: 2,
                        px: 4,
                        boxShadow:
                          "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                        borderRadius: "0.5rem",
                        backgroundColor: "white",
                        cursor: "pointer",
                      }}
                    >
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
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
          ))}
        </>
      )}
    </div>
  );
};

export default GroceryCard;
