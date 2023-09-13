import { TextField, Box, FormLabel,FormHelperText, useTheme } from "@mui/material";

import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import { useDispatch, useSelector } from "react-redux";
import { personalInfoState, updatePersonalInfo } from "./personalInfoSlice";

import Buttons from "../../components/Buttons";

type inputFieldsType = {
  label: "Name" | "Email Address" | "Phone Number";
  placeholder: string;
  InputName: "name" | "email" | "phone";
  type: "name" | "email" | "tel";
};

const PersonalInfo: React.FC = () => {
  const theme = useTheme();
  const primary = theme.palette.Primary;
  const neutral = theme.palette.neutral;

  const dispatch = useDispatch();
  const personalInfo = useSelector(
    (state: { personalInfo: personalInfoState }) => state.personalInfo
  );
  const { register, handleSubmit, control,formState:{errors} } = useForm<personalInfoState>(
    { defaultValues: personalInfo }
  );
  // console.log(personalInfo)
  const onSubmit = (data: personalInfoState) => {
    dispatch(updatePersonalInfo(data));
  };

  const inputFields: inputFieldsType[] = [
    {
      label: "Name",
      placeholder: "e.g Stephen King",
      InputName: "name",
      type: "name",
    },
    {
      label: "Email Address",
      placeholder: "e.g stephenking@lorem.com",
      InputName: "email",
      type: "email",
    },
    {
      label: "Phone Number",
      placeholder: "e.g +1 234 567 890",
      InputName: "phone",
      type: "tel",
    },
  ];
  // const watchValue = watch();
  // console.log(watchValue);

  return (
    <>
      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        {inputFields.map((inputField) => (
          <Box key={inputField.label}>
            <FormLabel sx={{ color: primary.marineBlue.main }}>
              {inputField.label}
            </FormLabel>
            {errors[inputField.InputName]?.message &&<FormHelperText error>This field is required</FormHelperText>}
            <TextField
              type={inputField.type}
              {...register(inputField.InputName,{required:true})}
              required
              // error
              margin="dense"
              placeholder={inputField.placeholder}
              fullWidth
              size="small"
              inputProps={{
                sx: {
                  color: primary.marineBlue.main,
                },
              }}
              sx={{
                mb: { md: 3 },
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": {
                    borderColor: neutral.coolGray.main,
                    borderRadius: ".5rem",
                  },
                },
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": { borderColor: primary.purplishBlue.main },
                },
                "& .MuiOutlinedInput-root:hover": {
                  "& > fieldset": { cursor: "pointer" },
                },
              }}
            />
          </Box>
        ))}

        <Buttons />
      </form>
      <DevTool control={control} />
    </>
  );
};

export default PersonalInfo;
