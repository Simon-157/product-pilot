import { useSnackbar } from "@/hooks/useSnackBar";

const MyComponent: React.FC = () => {
  const { showSnackbar, snackbar } = useSnackbar();

  const handleClick = () => {
    showSnackbar('Hello world!', 'success');
  };

  return (
    <div>
      <button onClick={handleClick}>Show Snackbar</button>
      {snackbar}
    </div>
  );
};

export default MyComponent
