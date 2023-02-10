# question-1

To get started, run 🔆npm run dev🔆

🎉VOILA, app is running and connected to the database 🎉

To connect to MongoDB locally on your machine, remove the MongoDB Atlas config link entirely and use the MongoDB compass link ("mongodb://localhost:27017/users").

1. To add a customer, proceed to '/api/customers' and make a POST request passing the 🔆name🔆 of the customer (You can refer to the attached screenshots)

2. To add an account to a customer, proceed to '/api/accounts' and make a POST request passing the 🔆name🔆 of the account, the 🔆customerId🔆 (from customer creation - default MongoDB ObjectID) and optionally, the 🔆balance🔆

3. To add a card to an account, proceed to '/api/cards' and make a POST request passing the customer 🔆accountId🔆(from account creation - default MongoDB ObjectID) and the (card) 🔆name🔆 and 🔆number🔆
