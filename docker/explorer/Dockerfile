FROM kkarczmarczyk/node-yarn:8.0-wheezy

RUN git clone https://github.com/GoFundDev/gofund-explorer.git
WORKDIR /workspace/gofund-explorer
RUN yarn install
RUN yarn run build:web
ENTRYPOINT ["yarn", "run", "start:web"]
