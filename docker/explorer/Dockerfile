FROM kkarczmarczyk/node-yarn:8.0-wheezy

RUN npm install n -g
RUN n stable
RUN git clone https://github.com/GoFundDev/gofund-explorer.git
WORKDIR /workspace/gofund-explorer
RUN yarn install
RUN yarn run build:web
ENTRYPOINT ["yarn", "run", "start:web"]
