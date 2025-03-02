import React from "react";

const Connected = (props) => {
  return (
    <div className="connected-container">
      <h1 className="connected-header">You are Connected to Metamask</h1>
      <p className="connected-account">Metamask Account: {props.account}</p>
      <p className="connected-account">Remaining Time: {props.remainingTime}</p>
      <div>
        {props.showButton ? (
          <p className="connected-account">You have already voted</p>
        ) : (
          <div className="buttonaling">
            <input
              type="number"
              placeholder="Enter Candidate Index"
              value={props.number}
              onChange={props.handleNumberChange}
            />
            <br />
            <button className="nlogin-button" onClick={props.voteFunction}>
              Vote
            </button>
          </div>
        )}
      </div>

      <table id="myTable" className="candidates-table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Candidate name</th>
            {/* <th>Candidate votes</th> */}
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {props.candidates.map((candidate, index) => (
            <tr key={index}>
              <td>{candidate.index}</td>
              <td>{candidate.name}</td>
              {/* <td>{candidate.voteCount}</td> */}
              <td>
                {candidate.image && (
                  <img
                    src={candidate.image}
                    alt={`Candidate ${candidate.index}`}
                    style={{ width: "50px", height: "auto" }}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Connected;
