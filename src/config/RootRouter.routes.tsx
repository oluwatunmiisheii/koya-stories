import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";


import StoriesRoutes from './routes/Stories.routes';


// public routes
const routes = [...StoriesRoutes]

 
const RootRouter = () => {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Routes>
        {routes.map((route: { path: string, title: string, component: React.FC }, index: number) => (
          <Route
            path={route.path}
            key={index}
            element={<route.component />}
          />
        ))}
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Suspense>
  )
}
 
export default RootRouter;