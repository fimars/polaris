import { AppProvider, DatePicker } from "@shopify/polaris";
import { useState, useCallback } from "react";
import translations from "@shopify/polaris/locales/en.json";
function DatePickerExample() {
  const [{ month, year }, setDate] = useState({ month: 1, year: 2018 });
  const [selectedDates, setSelectedDates] = useState(
    new Date("Wed Feb 07 2018 00:00:00 GMT-0500 (EST)")
  );

  const handleMonthChange = useCallback(
    (month, year) => setDate({ month, year }),
    []
  );

  const browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const disableSpecificDates = [
    new Date("Mon Feb 12 2018 00:00:00 GMT-0500 (EST)"),
    new Date("Sat Feb 10 2018 00:00:00 GMT-0500 (EST)"),
    new Date("Wed Feb 21 2018 00:00:00 GMT-0500 (EST)"),
  ];

  return (
    <DatePicker
      month={month}
      year={year}
      onChange={setSelectedDates}
      onMonthChange={handleMonthChange}
      selected={selectedDates}
      disableDatesBefore={new Date("Sat Feb 03 2018 00:00:00 GMT-0500 (EST)")}
      disableDatesAfter={new Date("Sun Feb 25 2018 00:00:00 GMT-0500 (EST)")}
      disableSpecificDates={disableSpecificDates}
    />
  );
}

function Example() {
  return (
    <AppProvider i18n={translations}>
      <link
        rel="stylesheet"
        href="https://unpkg.com/@shopify/polaris@latest/build/esm/styles.css"
      />
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 50px",
        }}
      >
        <DatePickerExample />
      </div>
    </AppProvider>
  );
}

export default Example;