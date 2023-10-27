import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "./header";
import Footer from "./footer";

const HomeTable = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://api.fastlotwin.net/homeapi");
        console.log(response.data);
        setData(response.data);
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
    if (!data || !data.numbers || data.numbers.length === 0) {
      return <p>No numbers available</p>;
    }

    // Assuming you want to display the numbers in a 10x10 grid
    const grid = [];
    for (let i = 0; i < 10; i++) {
      const row = [];
      for (let j = 0; j < 10; j++) {
        const index = i * 10 + j;
        const rowClass = i % 2 === 0 ? 'bg-white' : 'bg-custom-pink';

        if (index < data.numbers.length) {
          row.push(
            <td
              key={index}
              class={`custom-cell border border-black p-2 ${rowClass}`}
            >
              {data.numbers[index]}
            </td>
          );
        } else {
          row.push(
            <td
              key={index}
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
      <table class="custom-table w-full mt-12 mb-12">
        <thead>
          <tr>
            <th
              class="border border-gray-300 p-2 bg-neutral-900 text-white text-center"
              colSpan="10"
            >
             {formatTimestamp(data.time)}
            </th>
          </tr>
        </thead>
        <tbody class="text-center font-bold text-black text-3xl">{grid}</tbody>
      </table>
    );
  };

  return (
    <div class="w-full bg-slate-300">
      <Header nextRelease={data ? formatTimestamp(data.next_release) : ''} />
      {data ? (
        <>
          {renderNumbersGrid()}
        </>
      ) : (
        <p>Loading data...</p>
      )}
      <Footer />
    </div>
  );
};

export default HomeTable;
