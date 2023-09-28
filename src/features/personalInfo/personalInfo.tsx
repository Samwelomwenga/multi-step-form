import {
  TextField,
  Box,
  FormLabel,
  useTheme,
  FormHelperText,
} from "@mui/material";

import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useNavigate } from "react-router-dom";

import { nextStep } from "../header/headerSlice";
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

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const personalInfo = useSelector(
    (state: { personalInfo: personalInfoState }) => state.personalInfo
  );
  const personalInfoSchema = z.object({
    name: z
      .string()
      .nonempty({ message: "Name is required" })
      .min(2, { message: "Name should be at least 2 characters long" })
      .refine(
        (value) => /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/.test(value),
        "Name should contain only alphabets"
      )
      .refine(
        (value) => /^[a-zA-Z]+\s+[a-zA-Z]+$/.test(value),
        "Please enter both first name and last name"
      ),
    email: z
      .string()
      .email({ message: "Invalid email address" })
      .nonempty({ message: "Email is required" })
      .refine(
        (value) =>
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            value
          ),
        "Invalid email address"
      ),
    phone: z
      .string()
      .min(10, { message: "Invalid phone number" })
      .nonempty({ message: "Phone number is required" })
      .refine(
        (value) =>
          /((\+\d{1,2}\s?)?1?-?\.?\s?\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}/.test(
            value
          ),
        "Invalid phone number"
      ),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<personalInfoState>({
    defaultValues: personalInfo,
    resolver: zodResolver(personalInfoSchema),
  });
  const onSubmit = (data: personalInfoState) => {
    dispatch(updatePersonalInfo(data));
    dispatch(nextStep());
    navigate("/step=2");
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

  return (
    <>
      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        {inputFields.map((inputField) => (
          <Box key={inputField.label}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {" "}
              <FormLabel sx={{ color: primary.marineBlue.main }}>
                {inputField.label}
              </FormLabel>
              <FormHelperText
                sx={{ color: primary.strawberryRed.main, fontWeight: "700" }}
              >
                {errors[inputField.InputName]?.message}
              </FormHelperText>
            </Box>

            <TextField
              type={inputField.type}
              {...register(inputField.InputName)}
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
                    borderColor: !errors[inputField.InputName]
                      ? neutral.coolGray.main
                      : primary.strawberryRed.main,
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
