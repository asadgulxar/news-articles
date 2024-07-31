import { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Button,
  Box,
} from "@mui/material";
import { AppContext } from "../context/app-context";
const FiltersForm = () => {
  const { setContextData, query, source, sortBy, currentTab } =
    useContext(AppContext);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: { query, sortBy, source },
    mode: "onChange",
  });
  const onSubmit = (data) => {
    setContextData({ ...data, currentTab });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "flex", flexDirection: "column", gap: 2, margin: "20px" }}
    >
      <Controller
        name="query"
        control={control}
        rules={{ required: "Search Query is required" }} // Add validation rule here
        render={({ field }) => (
          <TextField
            {...field}
            label="Search Query"
            error={!!errors.query} // Show error if field is invalid
            helperText={errors.query ? errors.query.message : ""} // Display the error message
            fullWidth
          />
        )}
      />
      <Controller
        name="source"
        control={control}
        render={({ field }) => <TextField {...field} label="Source e.g BBC" />}
      />
      <FormControl component="fieldset" margin="normal">
        <FormLabel component="legend">Sort By</FormLabel>
        <Controller
          name="sortBy"
          control={control}
          render={({ field }) => (
            <RadioGroup {...field} row>
              <FormControlLabel value="date" control={<Radio />} label="Date" />
              <FormControlLabel
                value="relevancy"
                control={<Radio />}
                label="Relevancy"
              />
            </RadioGroup>
          )}
        />
      </FormControl>

      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
};

export default FiltersForm;
