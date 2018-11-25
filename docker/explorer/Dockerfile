FROM kkarczmarczyk/node-yarn:8.0-wheezy

RUN git clone https://github.com/GoFundDev/gofund-explorer.git
WORKDIR /gofund-explorer
RUN yarn install
RUN cp config.template.js config.js
RUN yarn run build:web
