import { useEffect, useState } from 'react';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/globe-data')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Globe Data</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <div key={index} className="p-4 border rounded">
            <h2 className="font-semibold">{item.Title}</h2>
            <p>{item['Application Form']}</p>
            <p>{item.Photographs}</p>
            <p>{item['Identity Proof']}</p>
            <p>{item['Guarantor Form']}</p>
            <p>{item['Academic Records']}</p>
            <p>{item['Income Proof']}</p>
            <p>{item['Property Documents']}</p>
            <p>{item['Residence Proof']}</p>
            <p>{item['Bank Statements']}</p>
            <p>{item['Additional Documents']}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
