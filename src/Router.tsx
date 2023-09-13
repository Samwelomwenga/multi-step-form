import {createBrowserRouter,RouterProvider,} from "react-router-dom"

import PersonalInfoStep from "./steps/PersonalInfoStep";
import SelectPlanStep from "./steps/SelectPlanStep";
import PickAddOnsStep from "./steps/PickAddOnsStep";
import FinishUpStep from "./steps/FinishUpStep";

const Router=()=>{
    const BrowserRouter=createBrowserRouter([
        {
          path: "/",
          element: <PersonalInfoStep />,
          children: [
            {
              path: "step=1", 
              element: <PersonalInfoStep />,
            },
            {
              path: "step=2", 
              element: <SelectPlanStep />,
            },
            {
              path: "step=3", 
              element: <PickAddOnsStep />,
            },
            {
              path: "step=4", 
              element: <FinishUpStep />,
            },
          ],
        },
      ]);
      return <RouterProvider router={BrowserRouter}/>

};
export default Router;