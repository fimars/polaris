import { AppProvider, Icon } from "@shopify/polaris";
import { CirclePlusMinor } from "@shopify/polaris-icons";
import '@shopify/polaris/build/esm/styles.css';
import translations from '@shopify/polaris/locales/en.json';

function Example() {
  return (
    <AppProvider i18n={translations}>
      <div
        style={{
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 50px",
  }}
      >
        <div>
  <Icon source={CirclePlusMinor} color="base" backdrop />
  <Icon source={CirclePlusMinor} color="highlight" backdrop />
  <Icon source={CirclePlusMinor} color="success" backdrop />
  <Icon source={CirclePlusMinor} color="warning" backdrop />
  <Icon source={CirclePlusMinor} color="critical" backdrop />
</div>
      </div>
    </AppProvider>
  );
}

export default Example;
    