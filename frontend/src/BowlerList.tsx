import { bowler } from './types/bowler';
import { useEffect, useState } from 'react';

function BowlerList() {
  const [bowlers, setBowlers] = useState<bowler[]>([]);

  useEffect(() => {
    const fetchBowler = async () => {
      const response = await fetch('https://localhost:5000/Bowler');
      const data = await response.json();
      setBowlers(data);
    };
    fetchBowler();
  }, []);

  // Filter only Marlins and Sharks
  const filteredBowlers = bowlers.filter(
    (b) => b.team?.teamName === 'Marlins' || b.team?.teamName === 'Sharks'
  );

  return (
    <>
      <table className="bowler-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredBowlers.map((b) => (
            <tr key={b.bowlerId}>
              <td>
                {b.bowlerFirstName} {b.bowlerMiddleInit} {b.bowlerLastName}
              </td>
              <td>{b.team.teamName}</td>
              <td>{b.bowlerAddress}</td>
              <td>{b.bowlerCity}</td>
              <td>{b.bowlerState}</td>
              <td>{b.bowlerZip}</td>
              <td>{b.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;
