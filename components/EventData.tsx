export const EventData = (props: any) => {
  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="bg-gray-700 rounded-md w-full text-sm text-left border-2 border-gray-600">
          <thead className="text-xs text-white uppercase ">
                        <br/>
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Alliance
              </th>
              <th scope="col" className="px-6 py-3 text-red-400">
                Red Score
              </th>
              <th scope="col" className="px-6 py-3 text-sky-400">
                Blue Score
              </th>
            </tr>
          </thead>
          <tbody>
            {props.isLoading ? (
              <p>Loading matches...</p>
            ) : (
              props.data?.map((match: any, i: number) => {
                const team6070 = match.teams.filter(
                  (team: any) => team.teamNumber == "6070"
                );
                const alliance = team6070[0].station.replace(/[0-9]/g, "");

                const didWeWin = () => {
                  if (
                    match.scoreRedFinal > match.scoreBlueFinal &&
                    alliance === "Red"
                  ) {
                    return true;
                  } else if (
                    match.scoreBlueFinal > match.scoreRedFinal &&
                    alliance === "Blue"
                  ) {
                    return true;
                  } else {
                    return false;
                  }
                };

                return (
                  <tr
                    className="text-gray-300 border-2 border-gray-600"
                    key={i}
                  >
                    <th
                      scope="row"
                      className={`px-6 py-4 font-bold whitespace-nowrap ${
                        didWeWin() ? "text-green-300" : "text-red-300"
                      }`}
                    >
                      {match.description}
                    </th>
                    <td
                      className={`px-6 py-4 ${
                        alliance === "Blue" ? "text-sky-300" : "text-red-300"
                      }`}
                    >
                      {alliance}
                    </td>
                    <td className="px-6 py-4 font-semibold ">{match.scoreRedFinal}</td>
                    <td className="px-6 py-4 font-semibold ">{match.scoreBlueFinal}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};