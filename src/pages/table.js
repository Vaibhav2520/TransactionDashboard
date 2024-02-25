import { React, useEffect, useState } from "react";
import { ReactUtilityTable } from "react-utility-table";
import { axiosGet, axiosPost } from "../service/axios";
import"../components/monthpicker"
import Monthpicker from "../components/monthpicker";

const Table = () => {
  const [mockData, setMockData] = useState([
    {
      id: 1,
      title: "srfwrfwerfr",
      price: 329.85,
      description: "",
      category: "",
      image: "",
      sold: false,
      dateOfSale: "",
    },
  ]);

  const [startDateMonth, setStartDateMonth] = useState("03-01-2022");
  const [endDateMonth, setEndDateMonth] = useState("03-31-2022");

  useEffect(() => {
    if(startDateMonth == null)
      return;
    // GET request
    axiosGet
      .get("/products?pageNumber=1&pageSize=100")
      .then((response) => {
        console.log("Response......", response.data);
        let respData = response.data;
        const start = new Date(startDateMonth);
        const end = new Date(endDateMonth);
        respData = respData.filter(data => new Date(data.dateOfSale).getTime() >= start && new Date(data.dateOfSale).getTime() <= end);
       
        setMockData(respData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [startDateMonth]);

  return (
    <div>
    <Monthpicker
       setStartDateMonth={setStartDateMonth}
       setEndDateMonth={setEndDateMonth}
    />
      <ReactUtilityTable
        title="Transaction Dashboard"
        data={mockData}
        columns={[
          { title: "ID", field: "id" },
          {
            title: "TITLE",
            field: "title",
            type: "string",
          },
          {
            title: "Price",
            field: "price",
            type: "number",
          },
          {
            title: "",
            field: "",
            type: "",
          },
          { title: "DESCRIPTION", field: "description", type: "string" },
          { title: "CATEGORY", field: "category", type: "string" },
          { title: "IMAGE", field: "image", type: "url" },
          { title: "SOLD", field: "sold", type: "boolean" },
          { title: "DATEOFSALE", field: "dateOfSale", type: "string" },

         
        ]} 
        options={{
          tooltipDescText: "Descending Order",
          tooltipAscText: "Ascending Order",
          pageSize: 10,
        }}
        
      />
    </div>
  );
};

export default Table;
