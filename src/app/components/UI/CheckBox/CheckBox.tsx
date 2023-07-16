import React from "react";

interface CheckboxProps {
  id: string;
  defaultChecked?: boolean;
  checked?: boolean;
  value: string;
  label: string;
}

const CheckBox: React.FC<CheckboxProps> = ({ id, value, checked, defaultChecked, label }) => {
  return (
    <div className="flex items-center mb-4">
      <input
        id={id}
        type="checkbox"
        value={value}
        checked={checked}
        defaultChecked={defaultChecked}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label htmlFor={id} className=" capitalize ml-2 text-sm font-medium text-[#46464A]">
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
