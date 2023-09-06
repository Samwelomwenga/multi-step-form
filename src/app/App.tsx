import {CssBaseline} from '@mui/material'
import {ThemeProvider} from '@mui/material/styles'

import customTheme from '../customTheme'
// import PersonalInfoStep from '../steps/PersonalInfoStep'
// import PickAddOnsStep from '../steps/PickAddOnsStep'

import FinishUpStep from '../steps/FinishUpStep'
// import ThankYouStep from '../steps/ThankYouStep'

function App() {

  return (
    <ThemeProvider theme={customTheme}>
    <>
    <CssBaseline/>
    {/* <PersonalInfoStep/> */}
    {/* <PickAddOnsStep/> */}
<FinishUpStep/>
{/* <ThankYouStep/> */}
    </>
    </ThemeProvider>
  )
}

export default App
