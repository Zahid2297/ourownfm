import { useState, useRef, useEffect } from "react";

const Dropdown = ({ options, selectedValue, onChange, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === selectedValue) || options[0];

  const handleSelect = (option) => {
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={`dropdown ${className}`}>
      <input type="hidden" className="dropdown-input" value={selectedValue} />
      <button
        type="button"
        className="dropdown-toggle tw-flex tw-gap-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="tw-flex tw-w-fit tw-gap-2 tw-place-items-center">
          <div className="tw-w-[20px] tw-h-[20px]">
            <img
              src={selectedOption.icon}
              alt={selectedOption.label}
              className="dropdown-select-icon dark:tw-invert"
            />
          </div>
          <span className="dropdown-select-text">{selectedOption.label}</span>
        </span>
        <i className={`bi bi-chevron-${isOpen ? "up" : "down"} tw-ml-auto lg:tw-hidden`}></i>
        <i className={`bi bi-chevron-${isOpen ? "up" : "down"} tw-ml-auto lg:tw-block tw-hidden`}></i>
      </button>
      <ul
        className={`dropdown-menu tw-shadow-md tw-bottom-[50px] max-lg:tw-top-[105%] max-lg:tw-bottom-[unset]`}
        style={{ display: isOpen ? "block" : "none" }}
      >
        {options.map((option) => (
          <li
            key={option.value}
            className="tw-flex tw-gap-2 tw-place-items-center"
            onClick={() => handleSelect(option)}
          >
            <div className="tw-w-[20px] tw-h-[20px]">
              <img
                src={option.icon}
                alt={option.label}
                className="dropdown-menu-icon dark:tw-invert"
              />
            </div>
            <span className="dropdown-text">{option.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;

