import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderForHistory from "./headerForHistory";
import Footer from "./footer";

const HistoryTable = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://api.fastlotwin.net/history-api?date=2023-10-27");
        console.log(response.data.data,"================history data");
        setData(response.data.data);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchData();
  }, []); // Empty dependency array to ensure this effect runs once

  // Function to format the timestamp to "DD-MM-YYYY hh:mm A" format
  const formatTimestamp = (timestamp) => {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    };

    const formattedDate = new Date(timestamp).toLocaleDateString('en-IN', options);
    return formattedDate;
  };

  const renderNumbersGrid = () => {
    if (!data || !data.data || data.data.length === 0) {
      return <p className="mt-4">No numbers available</p>;
    }

    return data.data.map((tableData, index) => {
      // Check if 'numbers' property is available before splitting
      const numbers = tableData.numbers ? tableData.numbers.split(',') : [];

      // Create a 10x10 grid for the numbers
      const grid = [];
      for (let i = 0; i < 10; i++) {
        const row = [];
        for (let j = 0; j < 10; j++) {
          const numIndex = i * 10 + j;
          const rowClass = i % 2 === 0 ? 'bg-white' : 'bg-custom-pink';

          if (numIndex < numbers.length) {
            row.push(
              <td
                key={numIndex}
                class={`custom-cell border border-black p-2 ${rowClass}`}
              >
                {numbers[numIndex]}
              </td>
            );
          } else {
            row.push(
              <td
                key={numIndex}
                class={`custom-cell border border-black p-2 ${rowClass}`}
              >
                {/* Empty cell */}
              </td>
            );
          }
        }
        grid.push(<tr key={i}>{row}</tr>);
      }

      return (
        <div key={index} className="table-container mt-4">
          <table className="table-auto">
            <thead>
              <tr>
                <th className="sticky top-0 bg-white p-2">
                  {formatTimestamp(tableData.release)}
                </th>
              </tr>
            </thead>
            <tbody className="h-40 overflow-y-auto">
              {grid}
            </tbody>
          </table>
        </div>
      );
    });
  };

  return (
    <div class="w-full bg-slate-300">
    
              <HeaderForHistory />
             
      {data ? (
        <>
          {renderNumbersGrid()}
        </>
      ) : (
        <p class="mt-4">Loading data...</p>
      )}
      <Footer />
    </div>
  );
};

export default HistoryTable;
