FROM kkarczmarczyk/node-yarn:8.0-wheezy

RUN apt-get install -y cron
RUN git clone https://github.com/GoFundDev/gofund-explorer.git
WORKDIR /workspace/gofund-explorer
RUN yarn install
RUN npm install n -g
RUN n stable

WORKDIR /
COPY crontab /etc/cron.d/watchman-cron
RUN chmod +x /etc/cron.d/watchman-cron 
RUN crontab /etc/cron.d/watchman-cron
ENTRYPOINT ["bash", "entrypoint.sh"]
