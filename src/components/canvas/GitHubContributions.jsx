import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

const GitHubContributions = () => {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/indra-18/contributions');
        setContributions(response.data);
      } catch (error) {
        console.error('Error fetching GitHub contributions:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>GitHub Contributions</h2>
      <CalendarHeatmap
        startDate={new Date(new Date().getFullYear() - 1, 0, 1)}
        endDate={new Date()}
        values={contributions.map((contribution) => ({
          date: new Date(contribution.date),
          count: contribution.count,
        }))}
      />
    </div>
  );
};

export default GitHubContributions;
