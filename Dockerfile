FROM ubuntu:16.04
MAINTAINER Nikolay Matiushenkov <mnvx@yandex.ru>

RUN mkdir /work && mkdir /work/www

# Set correct environment variables
ENV HOME /work
ENV DEBIAN_FRONTEND noninteractive

# Install required packages
RUN apt-get update && apt-get install -y \
        python3 \
        python3-pip \
        supervisor \
	    nginx \
		curl \
		libcurl3 \
		libcurl3-dev \
		sudo \
		git \
		make \
		mc

RUN cd ~ && curl -sL https://deb.nodesource.com/setup_6.x -o nodesource_setup.sh && sudo bash nodesource_setup.sh && \
	apt-get install -y \
    nodejs \
    build-essential

COPY install/nginx-default /etc/nginx/sites-available/default
RUN	echo "\ndaemon off;" >> /etc/nginx/nginx.conf
RUN mkdir /var/log/uwsgi

RUN pip3 install --upgrade pip

RUN pip3 install uwsgi

# Deploy Onepage
RUN mkdir /work/www/smartbot
# Instead of ADD:
#https://github.com/moby/moby/issues/6396#issuecomment-270550056
#RUN git clone git@gitlab.com:smartbot.online/onepage.git /work/www/smartbot/onepage
#RUN npm install -g @angular/cli
ADD ./ /work/www/smartbot/onepage
RUN cd /work/www/smartbot/onepage && make staging && cd /work
#RUN pip3 install -r /work/www/smartbot/onepage/backend/requirements.txt
RUN chown -R www-data:www-data /work/www

COPY install/supervisor/onepage-server.conf /etc/supervisor/conf.d/

RUN apt-get -yq autoremove --purge && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Expose volumes and ports
EXPOSE 80
EXPOSE 443

CMD ["supervisord", "-n"]
