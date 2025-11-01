import React, { Suspense, lazy } from "react";
import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import Loading from "../components/common/loading/Loading";
const WorkProcess = lazy(() => import("../components/workProcess/WorkProcess"));
const Portfolio = lazy(() => import("../components/portfolio/Portfolio"));
const WorkTogether = lazy(() => import("../components/workTogether/WorkTogether"));
const Profession = lazy(() => import("../components/profession/Profession"));
const HappyClients = lazy(() => import("../components/happyClients/HappyClients"));
const Testimonial = lazy(() => import("../components/testimonial/Testimonial"));
const Contact = lazy(() => import("../components/contact/Contact"));
import "../../index.css";

const Home = () => {
  return (
    <div className="relative" id="home">
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          <Profile />
        </div>
      </div>
      <div className="bg-soft-white pt-30">
        <Suspense fallback={<Loading />}>
          <WorkProcess />
        </Suspense>
      </div>
      <Suspense fallback={<Loading />}>
        <Portfolio />
      </Suspense>
      <div className="bg-gray-900">
        <Suspense fallback={<Loading />}>
          <WorkTogether />
        </Suspense>
      </div>
      {/* Blog section removed */}
      <div className="bg-soft-white">
        <Suspense fallback={<Loading />}>
          <Profession />
        </Suspense>
      </div>
      <Suspense fallback={<Loading />}>
        <HappyClients />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Testimonial />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Contact />
      </Suspense>
    </div>
  );
};

export default Home;
