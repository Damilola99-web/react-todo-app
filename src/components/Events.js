
export default function Events({events, handleClick}) {
  return (
    <div className="listContainer">
      {
          events.map(
            (even, idx) =>
                 (
                    <div key={even.id} className= 'lists'>
                        <h2>
                            {even.name}
                        </h2>
                        <h3>Date : {even.date}</h3>
                        <button onClick={() => handleClick(even.id)}>delete me</button>
                    </div>
                )
        )
      }
    </div>
  );
}
