import { Footer } from "@/components/Footer";
import { API_URL } from "@/lib/constants";
import { GetServerSideProps } from "next";
import { useState, useEffect } from "react";

export default function Home({ initialTeams }: any) {
  const [allTeams, setAllTeams] = useState(
    initialTeams.sort(() => Math.random() - 0.5)
  );
  const [query, setQuery] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const filterTeams = () => {
      return initialTeams.filter((team: any) =>
        (
          team.team_number +
          team.nickname +
          team.city +
          team.state_prov +
          team.country
        )
          .toLowerCase()
          .includes(query.toLowerCase())
      );
    };

    if (query) {
      setAllTeams(filterTeams());
    } else {
      setAllTeams(initialTeams.sort(() => Math.random() - 0.5));
    }
  }, [query, initialTeams]);

  const changeSearch = (event: { target: { value: string } }) => {
    setQuery(event.target.value);
  };

  return (
    <>
      {isClient && (
        <>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-center text-primary md:text-5xl text-3xl font-black mt-16 mb-2">
              Machine: Scouting Simplified
            </h1>
            <p className="text-gray-400">
              6070 presents Machine - I need to rewrite this.
            </p>
            <input
              type="text"
              placeholder="Search teams..."
              value={query}
              onChange={changeSearch}
              spellCheck="false"
              className="rounded-lg bg-gray-700 py-2 px-5 mt-5 md:pr-4 md:pl-4 pr-8 pl-8 md:w-[450px]"
            />

            <div className="flex flex-col md:grid md:grid-cols-5 gap-5 mt-10 md:pr-32 md:pl-32 pr-8 pl-8">
              {allTeams.map((team: any, key: number) => {
                return (
                  <a
                    key={key}
                    href={`https://frc-events.firstinspires.org/team/${team.team_number}`}
                    target="_blank"
                  >
                    <div className="px-5 py-10 bg-gray-700 border-2 border-gray-500 rounded-lg hover:bg-gray-600">
                      <h1 className="text-gray-200 font-black">
                        {team.nickname.length > 19
                          ? `${team.nickname.slice(0, 19)}...`
                          : team.nickname}
                      </h1>
                      <p className="text-gray-400 text-xs uppercase">
                        {team.city ? team.city : "No location"}
                      </p>

                      <p className="text-gray-400 font-bold text-lg">
                        FRC {team.team_number}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
  query,
}) => {
  const baseFetch = async (pageNum: string) =>
    await fetch(`${API_URL}/api/teams?page=${pageNum}`).then((res) =>
      res.json()
    );

  const page1 = await baseFetch("1");
  const page2 = await baseFetch("2");
  const page3 = await baseFetch("3");
  const page4 = await baseFetch("4");
  const page5 = await baseFetch("5");
  const page6 = await baseFetch("6");
  const page7 = await baseFetch("7");
  const page8 = await baseFetch("8");
  const page9 = await baseFetch("9");
  const page10 = await baseFetch("10");
  const page11 = await baseFetch("11");
  const page12 = await baseFetch("12");
  const page13 = await baseFetch("13");
  const page14 = await baseFetch("14");
  const page15 = await baseFetch("15");
  const page16 = await baseFetch("16");
  const page17 = await baseFetch("17");
  const page18 = await baseFetch("18");
  const page19 = await baseFetch("19");

  return {
    props: {
      initialTeams: [
        ...page1,
        ...page2,
        ...page3,
        ...page4,
        ...page5,
        ...page6,
        ...page7,
        ...page8,
        ...page9,
        ...page10,
        ...page11,
        ...page12,
        ...page13,
        ...page14,
        ...page15,
        ...page16,
        ...page17,
        ...page18,
        ...page19,
      ],
    },
  };
};