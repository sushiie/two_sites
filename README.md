Two Sites

The project contains a 2 page small application. First is the login page where one can login and access the second dashboard page. Although there isn't an actual authentication check from redis or some server, its just checks for user name and stores it in the key 'userAuthenticated' in localstorage. This user name is then checked on the routing to dashboard page mimicing authentication (any value present in the 'userAuthenticated' key will authenticate the user).

On landing on the Dashboard page the user will see the 2 text boxes where he can put the urls to access any website. On blur of the text the url will begin trying to load, if it can load (server allows)m it will else it will show the error response from server. 

User can logout from the app using Logout button present on the top right, which removees the data from localstorage. Thus, blocking any access to dashboard page is the user name is not set. 

How to run the source:

1. After unzipping, go to the directory in the terminal.
2. Run npm install.
3. Run npm start, it will serve the local build on 4500 port.
4. Open browser and open localhost://4500.
5. You should see the login page.
