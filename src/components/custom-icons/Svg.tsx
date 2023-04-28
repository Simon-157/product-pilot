/**
 * The code exports two React components that render arrow icons for next and previous actions.
 * @param props - The props parameter is an object that contains any properties passed down to the
 * component from its parent component. In this case, it is of type IconProp, which is a custom type
 * defined in the project.
 * @returns Two React functional components, NextIcon and PreviousIcon, that render SVG icons with
 * green fill. They both accept an IconProp object as a prop.
 */

import { IconProp } from "@/types/icon-types";

export const NextIcon: React.FC<IconProp> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="green"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.63605 7.75735L7.05026 6.34314L12.7071 12L7.05029 17.6568L5.63608 16.2426L9.87869 12L5.63605 7.75735Z"
        fill="green"
      />
      <path
        d="M12.7071 6.34314L11.2929 7.75735L15.5356 12L11.2929 16.2426L12.7072 17.6568L18.364 12L12.7071 6.34314Z"
        fill="green"
      />
    </svg>
  );
};

export const PreviousIcon: React.FC<IconProp> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="green"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3639 7.75735L16.9497 6.34314L11.2929 12L16.9497 17.6568L18.3639 16.2426L14.1213 12L18.3639 7.75735Z"
        fill="green"
      />
      <path
        d="M11.2929 6.34314L12.7071 7.75735L8.46447 12L12.7071 16.2426L11.2929 17.6568L5.63605 12L11.2929 6.34314Z"
        fill="green"
      />
    </svg>
  );
};
