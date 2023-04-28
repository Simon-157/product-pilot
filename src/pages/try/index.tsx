import CustomSnackbar from "@/components/custom-snackbar/Snackbar";
import { useState } from "react";

const MyComponent: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={handleClick}>Show Snackbar</button>
      <CustomSnackbar message="This is a success message!" variant="success" open={open} onClose={handleClose} />
    </>
  );
};

export default MyComponent;
