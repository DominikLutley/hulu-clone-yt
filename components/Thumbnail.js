import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/dist/client/image";

const Thumbnail = ({ movie }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  const title = movie.title || movie.name;
  const IMG_URL = movie.backdrop_path || movie.poster_path;
  return (
    <div className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        layout="responsive"
        src={`${BASE_URL}${IMG_URL}`}
        className="object-contain"
        width={1920}
        height={1080}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{movie.overview}</p>

        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {title}
        </h2>

        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {movie.media_type && `${movie.media_type} • `}
          {movie.release_date || movie.first_air_date}
          {" • "}
          <ThumbUpIcon className="h-5 mx-2" />
          {movie.vote_count}
        </p>
      </div>
    </div>
  );
};

export default Thumbnail;
