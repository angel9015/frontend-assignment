This assessment is to create a user interface that displays cars listed on the platform in which users can search, filter, and browse.

# Understanding the basic assumptions of this app
1. I assume that users can search, filter and browse easily in this app.
This app consists of 3 parts such as search view, filter view, display grid view. As soon as search keyword that user want, grid view will display searched result.
User can easily collapse search or filter view using down button. And User can car list in the grid view by scrolling.
2. I assume that car has details such as make, model, model year, color.
In the grid view, user can click the car item and it will display details and cancel and book buttons. Users can select and book favorite car using book button but currently it is upcoming. It don't have fake post api. Later it will be implemented.
3. I aussme that it don't need vin info currently but later it should be handled with correct vin.
As fake data, NHTSA is not interpreting correctly. Maybe later it will be upgraded.
4. I aussme that it should use react redux store to handle api and a lot of data.
It can't get all data from api again every search or filter.

# Getting Started with this app
This project was bootstrapped with Expo CLI(https://docs.expo.dev/get-started/create-a-new-app/)

## Available Scripts

In the project directory, you can run:

### `npm run start`

### Build the app locally

This section has moved here: [https://docs.expo.dev/archive/classic-updates/building-standalone-apps/]

### Publish

This section has moved here: [https://docs.expo.dev/archive/classic-updates/publishing/]

### Deployment

This section has moved here: [https://docs.expo.dev/distribution/app-stores/]

### Upload

This section has moved here: [https://docs.expo.dev/distribution/uploading-apps/]

## expo release url

You can test on expo: [exp://exp.host/@chester_bushman/frontend-assessment?release-channel=default]