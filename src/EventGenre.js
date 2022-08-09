import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const EventGenre = ({ events }) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(() => getData());
  },
    [events]
  );



  const getData = () => {
    const genres = ["React", "JavaScript", "Node", "jQuery", "AngularJS"];
    const data = genres.map((genre) => {
      const value = events.filter((event) => event.summary.split(" ").includes(genre)).length;
      return { name: genre, value };
    });
    return data;
  };



  return (
    <ResponsiveContainer height={400}>
      <PieChart width={50} height={50}>
        <Pie
          data={data}
          cx={300}
          cy={50}
          labelLine={false}
          outerRadius={80}
          fill='#fff'
          dataKey="value"
          nameKey={'genre'}
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        />

      </PieChart>
    </ResponsiveContainer>
  );
}

export default EventGenre;