# Property & Tenant Management App

<img width="300" alt="Screenshot 2023-03-09 at 12 02 26 AM" src="https://user-images.githubusercontent.com/110567844/223959162-12e54290-178c-4109-bc1e-dae4a49ed5d4.png">
<img width="300" alt="Screenshot 2023-03-09 at 12 03 29 AM" src="https://user-images.githubusercontent.com/110567844/223959097-bc12c655-cadd-446e-90e0-8aeffa159f48.png">
<img width="300" alt="Screenshot 2023-03-09 at 12 03 44 AM" src="https://user-images.githubusercontent.com/110567844/223959025-efe48acb-ce86-44ef-acdd-d0154d727f9f.png">

## Demo

Link >>> https://rent-property-manager.vercel.app/

## Built With

- `NextJS` : 13.1.6
- `TypeScript`: 4.9.5
- `firebase`: 9.17.1
- `tailwindCSS`: 3.2.6

## Story

Rental housing and shared housing are very widespread in Canada. Some of those owners have multiple homes in various locations, which must be a hassle to manage the renters and whether or not they pay the monthly rent charge. This app is for those who want to smartly handle and manage their properties! No more paper!

## Feature

- E-mail/Password authentication. Each account has each storage.
- Add/delete properties and tenants. Memo some information about tenants.
- Update tenant's monthly payment history, automatically reset on the start of each month.

## Challenge

- Because the database contains numerous collections, it was a bit hard to figure out which endpoint to use.I made a basic diagram to keep track of the database structure visually.
- To make the app run quickly, I needed to use server-component and client-component strategically, which is a new feature in Next.js.
- I discovered when and how Next.js renders those components. This was an excellent lesson for understanding the overall structure of a web application.

