import type { IBlog } from "../interfaces/Blog";
import { Link } from "react-router-dom";
import utc from "dayjs/plugin/utc";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

const Blog = ({
  _id,
  title,
  content,
  username,
  dateCreated,
  commentCount,
}: IBlog) => {


  const timezone = dayjs.tz.guess() || 'America/Los_Angeles';
  const dateInSeconds = dateCreated as number / 1000;
  const localDate = dayjs.unix(dateInSeconds).tz(timezone).format('MM/DD/YYYY hh:mm A');

  
  return (
    <>
      <div>
        <Link className="" to={`/blog/${_id}`}>
          {title}{" "}
        </Link>
        <p>{content}</p>
        <p>
          By: {username} on {localDate}
        </p>
      </div>
      <div>
        <p>Comments: {commentCount} </p>
      </div>
    </>
  );
};

export default Blog;

