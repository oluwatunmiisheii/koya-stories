import { lazy } from 'react';


const AllStories = lazy(() => import('../../containers/stories/AllStories'));
const StoryDetails = lazy(() => import('../../containers/stories/StoryDetails'));

const StoriesRoutes = [
  {
    name: "All stories",
    path: "/",
    title: "All Stories",
    component: AllStories,
  },
  {
    name: "Stories details",
    path: "/stories/:id",
    title: "Story Details",
    component: StoryDetails,
  },
];

export default StoriesRoutes;