import {TextField,  FormLabel,useTheme } from "@mui/material";

import Buttons from "../../componets/Buttons";

type inputFieldsType = {
  label: "Name" | "Email Address" | "Phone Number";
  placeholder: string;
  type:"tel"|"text"
};

const PersonalInfo: React.FC = () => {
  const theme=useTheme();
  const primary=theme.palette.Primary;
    const neutral=theme.palette.neutral;


  const inputFields: inputFieldsType[] = [
    {
      label: "Name",
      placeholder: "e.g Stephen King",
      type:"text"
    },
    {
      label: "Email Address",
      placeholder: "e.g stephenking@lorem.com",
      type:"text"
    },
    {
      label: "Phone Number",
      placeholder: "e.g +1 234 567 890",
      type:"tel"
    },
  ];

  return (
          <form noValidate autoComplete="off">
            {inputFields.map((inputField) => (
              <>
                <FormLabel sx={{color:primary.MarineBlue.main}}>{inputField.label}</FormLabel>
                <TextField
                  type={inputField.type}
                  required
                  margin="dense"
                  placeholder={inputField.placeholder}
                  fullWidth
                  size="small"
                  inputProps={{
                    sx:{
                      color:primary.MarineBlue.main,
                      
                    }
                  }}
                  sx={{
                    mb:{md:3},
                    "& .MuiOutlinedInput-root":{
                      "& > fieldset":{borderColor:neutral.CoolGray.main,
                      borderRadius:".5rem"}
                    },
                    "& .MuiOutlinedInput-root.Mui-focused":{
                      "& > fieldset":{borderColor:primary.PurplishBlue.main}
                    },
                    "& .MuiOutlinedInput-root:hover":{
                      "& > fieldset":{cursor:"pointer"}
                    }
                  }}
                />
              </>
            ))}

            <Buttons />
          </form>
    
  );
};

export default PersonalInfo;
