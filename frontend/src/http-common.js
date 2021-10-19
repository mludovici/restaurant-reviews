import axios from 'axios'

export default axios.create({
	baseURL:
		'https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/restaurantsrealm-gkrxk/service/resto/incoming_webhook/',
	headers: {
		'Content-type': 'application/json',
	},
})
