import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Photo } from "@/components/Photo";
import { Subtitle } from "@/components/Subtitle";
import { Title } from "@/components/Title";
import { VideoEmbed } from "@/components/VideoEmbed";
import Head from "next/head";
import { MediaList } from "@/lib/Media";
import axios from "axios";
import { useEffect, useState } from "react";

const ViewAlbum = (props: any) => {
  return (
    <a
      href={props.link}
      target="_blank"
      className="absolute mt-[75px] bg-black text-gray-200 border-2 border-primary p-3 rounded-lg m-2 transition ease-in-out delay-50 hover:font-bold duration-300 hover:bg-transparent"
    >
      <button>View Album →</button>
    </a>
  );
};

const Description = (props: any) => {
  const styles = "text-center md:text-sm text-md mt-3";

  return (
    <Subtitle className={styles}>
      <span className="text-white font-bold">{props.title}</span>
      <br /> {props.subtitle ?? ""}
    </Subtitle>
  );
};

export default function MediaPage() {
  const [videos, setVideos] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/videos")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setVideos(data);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Media [6070: Gryphon Machine]</title>
      </Head>

      <Header
        title="Media"
        subtitle="Highlights of our competitions in photos & videos!"
      />

      <Title className="text-center">
        <span className="mr-2">🎥</span> Video Highlights
      </Title>

      <div className="flex flex-col justify-center text-center mb-16">
        {isLoading ? (
          <p className="text-gray-400">Loading videos...</p>
        ) : (
          <div className="md:flex items-center justify-center">
            <div className="flex flex-col md:w-[1100px] md:grid md:grid-cols-3 gap-5 pr-10 pl-10">
              {...videos.slice(0, 9).map((video: any, i: number) => {
                return <VideoEmbed key={i} id={video.link.split("?v=")[1]} />;
              })}
            </div>
          </div>
        )}
      </div>

      <Title className="text-center">
        <span className="mr-2">📷</span> Photo Highlights
      </Title>

      <div className="flex items-center justify-center mt-10">
        <div className="flex flex-col md:w-[1100px] md:grid md:grid-cols-3 gap-5 pr-10 pl-10">
          {MediaList.map((media: any) => {
            return (
              <>
                <div className="flex flex-col items-center">
                  <Photo
                    className="opacity-50 md:h-[200px] md:w-[500px]"
                    img={media.img}
                  />

                  <ViewAlbum link={media.url} />

                  <Description title={media.title} subtitle={media.subtitle} />
                </div>
              </>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
}
