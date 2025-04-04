import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { UserContext } from "../Context/UserContext";

const Poster = (props) => {
  const { user } = useContext(UserContext);
  const id = props.postedBy;

  return (
    <Link to={`/blog/${props._id}`}>
      <div
        id="scrollbar"
        className={`h-[45vh] flex flex-col items-start gap-2 shrink-1 px-1 py-3 rounded-lg m-2 overflow-auto relative ${
          props.isDark ? "bg-white/20" : "bg-black/15"
        }`}
      >
        {user._id == id ? (
          <div className="w-full flex flex-row items-center sticky right-1 bottom-1 justify-end gap-2 text-lg">
            <Link to={`/add/blog/${props._id}`}>
              <GrEdit className="text-blue-700" />
            </Link>
            <Link to="">
              <MdDelete className="text-red-700 text-xl" />
            </Link>
          </div>
        ) : (
          ""
        )}

        <div className="p-2 w-full relative">
          <img
            src={
              props.posterImage
                ? `${props.posterImage}`
                : "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png"
            }
            alt="post"
            className={`w-full rounded-md h-[25vh] border object-cover ${
              props.isDark ? "border-white" : "border-black"
            }`}
          />

          <h3
            className={`text-lg font-bold ${
              props.isDark ? "text-white" : "text-black"
            }`}
          >
            {props.title}
          </h3>
          <div
            className={`flex gap-3  ${
              props.isDark ? "text-white/50" : "text-black/50"
            } text-sm`}
          >
            <p className="flex items-center gap-1">
              <FaEye />
              {props.views ? Math.ceil(props.views) : 0}
            </p>
            <p className="flex items-center gap-1">
              <BiSolidLike />
              {props.likes ? Math.ceil(props.likes) : 0}
            </p>
          </div>
          <p
            className={`text-[10px] ${
              props.isDark ? "text-white/50" : "text-black/50"
            }`}
          >
            {props.about}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Poster;
