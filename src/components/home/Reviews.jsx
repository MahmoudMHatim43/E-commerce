import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaFacebook,
  FaSpotify,
  FaAirbnb,
  FaAmazon,
  FaShopify,
  FaTwitter,
} from "react-icons/fa";
const icons = [
  {
    component: <FaFacebook />,
    color: "#1877F2", // Facebook Blue
  },
  {
    component: <FaSpotify />,
    color: "#1DB954", // Spotify Green
  },
  {
    component: <FaAirbnb />,
    color: "#FF5A5F", // Airbnb Red
  },
  {
    component: <FaAmazon />,
    color: "#FF9900", // Amazon Orange
  },
  {
    component: <FaShopify />,
    color: "#96BF48", // Shopify Green
  },
  {
    component: <FaTwitter />,
    color: "#1DA1F2", // Twitter Blue
  },
];
const users = [
  {
    image: "user1.png",
    name: "Daniel Clifford",
    role: "Verified Graduate",
    comment: `I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.`,
    extendedComment: `I was an EMT for many years before I joined the bootcamp. I've been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best – and most grueling – time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.`,
    bgColor: "bg-purple-600 text-white",
  },
  {
    image: "user2.png",
    name: "Jonathan Walters",
    role: "Verified Graduate",
    comment: `The team was very supportive and kept me motivated`,
    extendedComment: `I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself.`,
    bgColor: "bg-gray-800 text-white",
  },
  {
    image: "user3.png",
    name: "Kira Whittle",
    role: "Verified Graduate",
    comment: `Such a life-changing experience. Highly recommended!`,
    extendedComment: `Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program.`,
    bgColor: "bg-white text-gray-900",
  },
  {
    image: "user4.png",
    name: "Jeanette Harmon",
    role: "Verified Graduate",
    comment: `An overall wonderful and rewarding experience`,
    extendedComment: `Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.`,
    bgColor: "bg-gray-100 text-gray-900",
  },
  {
    image: "user5.png",
    name: "Patrick Abrams",
    role: "Verified Graduate",
    comment: `Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.`,
    extendedComment: `The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer.`,
    bgColor: "bg-gray-900 text-white",
  },
];
const listVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.25, duration: 0.75 },
  }),
};
function Reviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.5, triggerOnce: false });

  return (
    <motion.section className="relative mt-5">
      <div className="flex flex-col items-center gap-2 text-center w-full">
        <span className="text-heading-lg">
          Trusted By Top Brands And Over{" "}
          <span className="text-orange-cstm">+1,000</span> Partners
        </span>
        <p className="text-body-text text-light-t2 dark:text-dark-t2">
          Related to our mission to provide the best possible experience for our
          users, we are committed to constantly improving and expanding our
          services.
        </p>
      </div>

      <div
        ref={ref}
        className="flex justify-evenly lg:w-[80svw] mx-auto p-6 text-5xl sm:text-6xl">
        {icons.map((icon, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ scale: 1.025, y: -10, color: icon.color }}
            whileTap={{ scale: 1.25, y: -10, color: icon.color }}
            variants={listVariants}
            className="flex items-center justify-center">
            <div
              className="hover:text-current cursor-pointer"
              style={{ color: "inherit" }}>
              {icon.component}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 lg:w-[80svw] mx-auto">
        {users.map((user, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.025, transition: { duration: 0.2 } }}
            className={`p-6 rounded-lg shadow-md ${user.bgColor} ${
              idx === 0 ? "lg:col-span-2 lg:row-span-2" : ""
            } cursor-pointer`}>
            <div className="flex items-center gap-4 mb-4">
              <img
                src={user.image}
                alt={`${user.name} profile`}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <span className="font-bold">{user.name}</span>
                <span className="block text-sm">{user.role}</span>
              </div>
            </div>
            <p className="text-xl font-semibold mb-4">{user.comment}</p>
            <p className="text-sm">{user.extendedComment}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Reviews;
