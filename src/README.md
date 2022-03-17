Think in Modules
================

### Introduction

Let's structure our App somehow. The way to do this in Angular is to use _Modules_ - `@NgModule()`.

You can structure your App in three different ways:

1. Feature driven: Create a Module for each feature.
2. Purely technical (not recommended): Create a Module for each technical Role, Layer or Sterotype.
3. Feature driven + technical (recommended).

#### Let's structure our App:

- We have two features: _profiles_ and _events_
- We'd like to share a module _shared_ with reusable artifacts (components, ...)
- We'd like to encapsulate the API in another shared module _api_

### Task

1. Create a shared module _shared_: `ng g module shared`
2. Create a shared module _api_: `ng g module api`
3. Create a feature module _profiles_: `ng g module --routing profiles`
4. Create a _start_ component for the module _profiles_: `ng g c profiles/profiles`
5. Later we'd like to use routing (not explained yet). Add this to your _profiles.component.html_: `<router-outlet></router-outlet>`.
6. Create a feature module _events_: `ng g module --routing events`
7. Create a _start_ component for the module _events_: `ng g c events/events`
8. Later we'd like to use routing. Add this to your _events.component.html_: `<router-outlet></router-outlet>`.
9. Move your _profile picture_ component into the _shared_ module.
10. Export the `ProfilePictureComponent`.
11. Wire up everything:
- _app_ imports the modules _profiles_, _events_ and _shared_
- _events_ imports _api_ and _shared_
- _profiles_ imports _api_ and _shared_

### HOWTOs

#### Example:

In order to import the module _shared_ into _app_:
```ts
// ...
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    // ...
    SharedModule
  ],
  // ...
})
export class AppModule { }    
```

Don't forget to export the _ProfilePictureComponent_ in order to make it visible outside the module:

```ts
// ...
@NgModule({
  declarations: [
    ProfilePictureComponent
  ],
  exports: [
    ProfilePictureComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}    
```