FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . ./

ENV MONGO_URL=mongodb+srv://Ruchit:Ruchit3050@zomato-master.vnagi.mongodb.net/zomato?retryWrites=true&w=majority
ENV GOOGLE_CLIENT_ID=1083322141643-60spptp4roaadtj9erujn4i9q5kqjl36.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET=kJmSo4DkqqWymuxYsbrQpubB
ENV AWS_S3_ACCESS_KEY=AKIAYDDPRC5E54DG3F6Y
ENV AWS_S3_SECRET_KEY=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
ENV MAILGUN_API_KEY="c5d1617986d87b1ff6df9b2b0f929f8f-90346a2d-a6984972"
ENV MAILGUN_DOMAIN="sandboxccd2c97282ad4f369c466381e3ad3caa.mailgun.org"
ENV RZR_PAY_ID=rzp_test_cY0KqHvb8Afe8c
ENV RZR_PAY_SECRET=sAJjzz73SHddCxrJ5GoxMdJi

CMD ["npm", "run", "start"]