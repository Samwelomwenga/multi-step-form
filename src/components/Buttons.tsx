import { Button, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { useNavigate } from 'react-router-dom'

import { useDispatch,useSelector } from "react-redux";
import { nextStep,backStep } from "../features/header/headerSlice";
import { RootState } from "../app/store";

interface NextButtonProps {
  step: string;
}

const NextButton: React.FC<NextButtonProps> = (props) => {
  const theme = useTheme();
  const primary = theme.palette.Primary;
  const neutral = theme.palette.neutral;
  const navigate=useNavigate()

  const dispatch = useDispatch();
  const handleNextButton = () => {
      navigate(`/${props.step}`)
      dispatch(nextStep())
      // console.log(props.step)
  }

  return (
    <Button
      type="submit"
      variant="contained"
      size="small"
      onClick={handleNextButton}
      sx={{
        bgcolor: primary.marineBlue.main,
        color: neutral.magnolia.main,
        py: ".4rem",
        px: ".8rem",
        ":hover": { bgcolor: primary.marineBlue.light },
      }}
    >
      Next Step
    </Button>
  );
};
const ConfirmButton: React.FC = () => {
  const theme = useTheme();
  const primary = theme.palette.Primary;
  const neutral = theme.palette.neutral;
  const navigate=useNavigate()

  const dispatch = useDispatch();
  const handleNextButton = () => {
      navigate("/")
      dispatch(nextStep())
      // console.log(props.step)
  }

  return (
    <Button
      type="submit"
      variant="contained"
      size="small"
      onClick={handleNextButton}
      sx={{
        bgcolor: primary.purplishBlue.main,
        color: neutral.magnolia.main,
        py: ".4rem",
        px: ".8rem",
        ":hover": { bgcolor: primary.purplishBlue.main,opacity:.87 },
      }}
    >
      Confirm
    </Button>
  );
};


const BackButton: React.FC = () => {
  const theme = useTheme();
  const primary = theme.palette.Primary;
  const neutral = theme.palette.neutral;
  const dispatch = useDispatch();

  const navigate=useNavigate()
  const handleBackButton = () => {
      navigate(-1)
      dispatch(backStep())
  }
  return (
    <Button
      variant="text"
      size="small"
      onClick={handleBackButton}
      sx={{
        color: neutral.coolGray.main,
        fontWeight: "700",
        py: ".4rem",
        px: ".8rem",
        ":hover": {
          color: primary.marineBlue.main,
        },
      }}
    >
      Go Back
    </Button>
  );
};

const Buttons: React.FC<NextButtonProps> = (props) => {
  const theme = useTheme();
  // const primary = theme.palette.Primary;
  const neutral = theme.palette.neutral;
  
  const activeStep = useSelector((state:RootState) => state.header.activeStep);

  return (
    <Stack
      sx={{
        display: "flex",
        width:{xs:"100%",md:"55%"},
        flexDirection: "row",
        justifyContent: "space-between",
        position:"absolute",
        bottom:{xs:"0",
      md:"10%"},
        bgcolor:neutral.white.main,
        py:"1rem",
        px:{
          xs:".7rem",
          md:"0"
        },
        ml:{xs:"-2rem",
      md:"0"}
      }}
    >
      <BackButton  />
    { activeStep===3?<ConfirmButton/>: <NextButton step={props.step}/>}
    </Stack>
  );
};

export default Buttons;
