# digital_cow_hut_backend

# l2a3-cow-hut-backend-assignment-raihaanshaarif
l2a3-cow-hut-backend-assignment-raihaanshaarif created by GitHub Classroom


### Live Link: https://digitalcowhutbackend-production.up.railway.app/
  ### Application Routes:

   #### User
   - api/v1/auth/signup (POST)
   - api/v1/users (GET)
   - api/v1/users/64905098830fe8f7688b33ee (Single GET)
   - api/v1/users/64905098830fe8f7688b33ee (PATCH)
   - api/v1/users/64905098830fe8f7688b33ee (DELETE)


   #### Cows
   - api/v1/cows (POST)
   - api/v1/cows (GET)
   - api/v1/cows/64906513cd795c1497759cb3 (Single GET)
   - api/v1/cows/64906513cd795c1497759cb3 (PATCH)
   - api/v1/cows/64906513cd795c1497759cb3 (DELETE) 

   ### Pagination and Filtering routes of Cows

   - api/v1/cows?page=1&limit=10
   - api/v1/cows?sortBy=price&sortOrder=asc
   - api/v1/cows?minPrice=20000&maxPrice=70000
   - api/v1/cows?location=Dhaka
   - api/v1/cows?searchTerm=Dha
     
  
   #### Orders
   - api/v1/orders (POST)
   - api/v1/orders (GET)
