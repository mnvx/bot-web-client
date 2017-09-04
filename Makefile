SHELL = /bin/bash

help:
	@echo "    dev"
	@echo "        Initialise virtualenv and dev requirements"
	@echo "    staging"
	@echo "        Install requirements and build for staging"
	@echo "    production"
	@echo "        Install requirements and build for production"
	@echo "    test"
	@echo "        Run tests"

dev:
	npm install -g @angular/cli
	pushd backend && \
	sudo apt-get install python3-venv && \
	python3 -m venv venv && \
	printf '#!/bin/bash\nvenv/bin/pip3 "$$@"' > pip3 && \
	chmod +x pip3 && \
	printf '#!/bin/bash\nvenv/bin/python3 "$$@"' > python3 && \
	chmod +x python3 && \
	./pip3 install --upgrade pip && \
	./pip3 install -r requirements-dev.txt && \
	./pip3 install -r requirements.txt && \
	popd
	pushd frontend && \
	npm install && \
	ng build && \
	popd

staging:
	npm install -g @angular/cli
	pushd backend && \
	pip3 install --upgrade pip && \
	pip3 install -r requirements.txt && \
	popd
	pushd frontend  && \
	npm install --production && \
	ng build --prod --env=staging && \
	popd

production:
	npm install -g @angular/cli
	pushd backend && \
	pip3 install --upgrade pip && \
	pip3 install -r requirements.txt && \
	popd
	pushd frontend && \
	npm install --production && \
	ng build --prod --env=prod && \
	popd

test:
	nosetests tests
