FROM ubuntu:16.04
MAINTAINER Nikolay Matiushenkov <mnvx@yandex.ru>

RUN mkdir /work && mkdir /work/www && mkdir /work/www/smartbot
# && chmod uao+rwx /work

# Set correct environment variables
ENV HOME /work
ENV DEBIAN_FRONTEND noninteractive

# Install required packages
RUN apt-get update && apt-get install -y \
        python3 \
        python3-pip \
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

#RUN npm install -g @angular/cli
RUN pip3 install uwsgi

ADD ./ /work/www/smartbot/onepage
#RUN cd /work/www/onepage && make staging && cd /work
RUN chown -R www-data:www-data /work/www

RUN apt-get -yq autoremove --purge && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

#RUN git clone git@gitlab.com:smartbot.online/onepage.git /work/www/onepage
#RUN sudo -u www-data git clone https://github.com/mnvx/backend-cup-laravel /var/www/cup-backend

# Expose volumes and ports
EXPOSE 80
#EXPOSE 443

CMD service nginx start ; \
    uwsgi --socket /work/www/smartbot/onepage/backend/uwsgi.sock --wsgi-file /work/www/smartbot/onepage/backend/wsgi.py --chmod-socket=666
