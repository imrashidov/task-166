import Review from "./Review";
import star1 from "../assets/star-1.svg";
import stars2 from "../assets/stars-2.svg";
import stars3 from "../assets/stars-3.svg";
import stars4 from "../assets/stars-4.svg";
import stars5 from "../assets/stars-5.svg";
import comment from "../assets/comment.svg";

export default function Reviews() {
  const reviews = [
    { comments: 378, stars: stars5, percentage: 72 },
    { comments: 24, stars: stars4, percentage: 32 },
    { comments: 21, stars: stars3, percentage: 20 },
    { comments: 15, stars: stars2, percentage: 16 },
    { comments: 2, stars: star1, percentage: 1 },
  ];

  return (
    <div className="flex flex-col items-center text-center mb-32">
      <div className="w-5/6 mb-16">
        <h3 className="font-bold text-4xl mb-12">Rəylər</h3>
        <div className="flex max-md:grid pl-16 py-10 max-md:pl-2 max-md:py-3 shadow-lg rounded-xl bg-gray-50 justify-center ">
          <div className="mr-24 max-md:mr-2">
            <span className="text-6xl font-medium max-md:text-5xl">4.9</span>
            <div className="flex mt-5 gap-3 max-md:mb-5 max-md:justify-center">
              <img src={comment} alt="Comment" />
              <p>440 rəy</p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center ml-24 max-md:ml-0 w-3/5 max-md:w-full ">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="flex justify-center items-center gap-2"
              >
                <p className="font-medium text-sm p-2 leading-5 w-9 ">
                  {review.comments}
                </p>
                <img src={review.stars} alt="Stars" className="ml-2" />
                <div className={`w-${review.percentage}`}>
                  <div className="border-gray-300 border-4 rounded-md  "></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 max-sm:grid-cols-2 w-5/6 gap-5">
        {Array.from({ length: 18 }).map((_, index) => (
          <Review key={index} id={index + 1} />
        ))}
      </div>
      <button className="mt-16 py-2 px-5 border-gray-300 border-2 rounded-xl hover:bg-gray-300">
        Daha çox
      </button>
    </div>
  );
}
