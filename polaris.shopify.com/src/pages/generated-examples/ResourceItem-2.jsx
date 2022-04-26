import { AppProvider, Card,ResourceList,ResourceItem,Avatar,TextStyle } from "@shopify/polaris";

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
        <Card>
  <ResourceList
    resourceName={{singular: 'customer', plural: 'customers'}}
    items={[
      {
        id: 145,
        url: 'customers/145',
        avatarSource:
          'https://burst.shopifycdn.com/photos/freelance-designer-working-on-laptop.jpg?width=746',
        name: 'Yi So-Yeon',
        location: 'Gwangju, South Korea',
      },
    ]}
    renderItem={(item) => {
      const {id, url, avatarSource, name, location} = item;

      return (
        <ResourceItem
          id={id}
          url={url}
          media={
            <Avatar customer size="medium" name={name} source={avatarSource} />
          }
          accessibilityLabel={`View details for ${name}`}
          name={name}
        >
          <h3>
            <TextStyle variation="strong">{name}</TextStyle>
          </h3>
          <div>{location}</div>
        </ResourceItem>
      );
    }}
  />
</Card>
      </div>
    </AppProvider>
  );
}

export default Example;