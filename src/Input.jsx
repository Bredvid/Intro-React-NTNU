import React, { useEffect } from "react";
import { useAppContext } from "./App";

/**
 * A component will rerender, and give a new return value, any time props or state changes.
 * Changing local varibales will not cause a rerender
 * This is why changes in props and state result in an update of the user interface while
 * updating local varibales dont.
 */
export const Input = props => {
  /**
   * You can access via props if passed down from App
   * const { value, setValue } = props
   */

  /** Access via context */
  const { value, setValue } = useAppContext();

  /**
   * useEffect take a functinon and an optional array of dependencies as input
   * the input function runs every time one of the values in the dependencie array changes
   */

  /**
   * This effect runs on every render
   * (not useful)
   */
  useEffect(() => console.log("useEffect"));

  /**
   * This effect runs when componenten mounts.
   * Typically used for data fetching and event listeners.
   * Any action you only want to do once in the lifespan of your component (not on every render)
   *
   * The return function runs when the componenten unmounts
   */
  useEffect(() => {
    const handleClick = () => console.log("click");
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  /**
   * This effect runs every time value changes
   */
  useEffect(() => console.log("value changed"), [value]);

  return (
    <input
      value={value}
      onChange={e => {
        setValue(e.target.value);
      }}
    />
  );
};
