import {createBrowserRouter,RouterProvider,} from "react-router-dom"

import App from "./app/App";
import SelectPlanStep from "./steps/SelectPlanStep";
import PickAddOnsStep from "./steps/PickAddOnsStep";
import FinishUpStep from "./steps/FinishUpStep";
import ThankYouStep from "./steps/ThankYouStep";


const Router=()=>{
    const BrowserRouter=createBrowserRouter([
      {
        path: "/",
        element: <App />,
        children: [
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
          {
            path: "/thankYou",
            element: <ThankYouStep/>,
          },
        ],
      },
      ]);
      return <RouterProvider router={BrowserRouter}/>

};
export default Router;