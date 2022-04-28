import { AppProvider, Card,ResourceList,Avatar,ResourceItem,TextStyle } from "@shopify/polaris";
import translations from '@shopify/polaris/locales/en.json';
function ResourceListWithTotalItemsCount() {
  return (
    <Card>
      <ResourceList
        resourceName={{singular: 'customer', plural: 'customers'}}
        items={[
          {
            id: 105,
            url: 'customers/341',
            name: 'Mae Jemison',
            location: 'Decatur, USA',
          },
          {
            id: 205,
            url: 'customers/256',
            name: 'Ellen Ochoa',
            location: 'Los Angeles, USA',
          },
        ]}
        renderItem={(item) => {
          const {id, url, name, location} = item;
          const media = <Avatar customer size="medium" name={name} />;

          return (
            <ResourceItem
              id={id}
              url={url}
              media={media}
              accessibilityLabel={`View details for ${name}`}
            >
              <h3>
                <TextStyle variation="strong">{name}</TextStyle>
              </h3>
              <div>{location}</div>
            </ResourceItem>
          );
        }}
        showHeader
        totalItemsCount={50}
      />
    </Card>
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
        <ResourceListWithTotalItemsCount />
      </div>
    </AppProvider>
  );
}

export default Example;
    