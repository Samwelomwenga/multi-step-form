import {CssBaseline} from '@mui/material'
import {ThemeProvider} from '@mui/material/styles'

import customTheme from '../customTheme'
// import FinishUpStep from '../steps/FinishUpStep'
// import ThankYouStep from '../steps/ThankYouStep'
// import PersonalInfo from '../features/personalInfo/PersonalInfo'
// import PickAddOns from '../features/PickAddOns/PickAddOns'
import SelectPlan from '../features/selectPlan/SelectPlan'
function App() {

  return (
    <ThemeProvider theme={customTheme}>
    <>
    <CssBaseline/>
{/* <NextButton/> */}
{/* <BackButton/> */}
{/* <PersonalInfo/> */}
{/* <PickAddOns/> */}
<SelectPlan/>
{/* <ThankYouStep/> */}
{/* <FinishUpStep/> */}
    </>
    </ThemeProvider>
  )
}

export default App
