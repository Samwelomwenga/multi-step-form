import {CssBaseline} from '@mui/material'
import {ThemeProvider} from '@mui/material/styles'

import {Route,Routes} from "react-router-dom"

import customTheme from '../customTheme'
import PersonalInfoStep from '../steps/PersonalInfoStep'
import SelectPlanStep from '../steps/SelectPlanStep'
import PickAddOnsStep from '../steps/PickAddOnsStep'
import FinishUpStep from '../steps/FinishUpStep'
// import ThankYouStep from '../steps/ThankYouStep'

function App() {

  return (
    <ThemeProvider theme={customTheme}>
    <>
    <CssBaseline/>
    <Routes>
      <Route path='/?step=1' element={<PersonalInfoStep/>}/>
      <Route path='/?step=2' element={<SelectPlanStep/>}/>
      <Route path='/?step=3' element={<PickAddOnsStep/>}/>
      <Route path='/?step=4' element={<FinishUpStep/>}/>
    </Routes>
    {/* <PersonalInfoStep/> */}
    {/* <SelectPlanStep/> */}
    {/* <PickAddOnsStep/> */}
{/* <FinishUpStep/> */}
{/* <ThankYouStep/> */}
    </>
    </ThemeProvider>
  )
}

export default App
